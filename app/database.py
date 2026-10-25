"""Database connection helpers for local SQLite and hosted PostgreSQL."""

from __future__ import annotations

import os
import re
import sqlite3
import threading
from pathlib import Path
from typing import Any, Callable
from urllib.parse import quote, unquote

_pg_pool: Any = None
_pool_lock = threading.Lock()


class DatabaseConnection:
    def __init__(
        self,
        connection: Any,
        *,
        postgres: bool,
        pool_release: Callable[[Any], None] | None = None,
    ) -> None:
        self._connection = connection
        self._postgres = postgres
        self._pool_release = pool_release

    def execute(self, query: str, parameters: tuple[Any, ...] | list[Any] = ()) -> Any:
        if self._postgres:
            query = _postgres_placeholders(query)
        return self._connection.execute(query, parameters)

    def commit(self) -> None:
        self._connection.commit()

    def rollback(self) -> None:
        self._connection.rollback()

    def close(self) -> None:
        if self._pool_release is not None:
            try:
                self._pool_release(self._connection)
            except Exception:
                pass
        else:
            self._connection.close()


def _postgres_placeholders(query: str) -> str:
    return query.replace("?", "%s")


def normalize_database_url(url: str) -> str:
    """Ensure special characters in the database password are percent-encoded."""
    cleaned = url.strip()
    pattern = (
        r"^(?P<scheme>[a-zA-Z0-9+.-]+://)"
        r"(?P<user>[^:]+):"
        r"(?P<password>.+)"
        r"@(?P<host>[a-zA-Z0-9.-]+)"
        r"(?::(?P<port>\d+))?"
        r"(?P<rest>/.*)?$"
    )
    match = re.match(pattern, cleaned)
    if not match:
        return cleaned

    groups = match.groupdict()
    clean_password = quote(unquote(groups["password"]), safe="")
    normalized = f"{groups['scheme']}{groups['user']}:{clean_password}@{groups['host']}"
    if groups["port"]:
        normalized += f":{groups['port']}"
    if groups["rest"]:
        normalized += groups["rest"]
    return normalized


def get_connection_pool(database_url: str) -> Any:
    global _pg_pool
    if _pg_pool is None:
        with _pool_lock:
            if _pg_pool is None:
                from psycopg.rows import dict_row
                from psycopg_pool import ConnectionPool

                _pg_pool = ConnectionPool(
                    conninfo=database_url,
                    min_size=1,
                    max_size=10,
                    kwargs={"row_factory": dict_row, "prepare_threshold": None},
                    open=True,
                )
    return _pg_pool


def close_connection_pool() -> None:
    global _pg_pool
    with _pool_lock:
        if _pg_pool is not None:
            try:
                _pg_pool.close()
            except Exception:
                pass
            _pg_pool = None


def connect_database(db_path: Path) -> DatabaseConnection:
    database_url = os.getenv("NETGUARD_DATABASE_URL") or os.getenv("DATABASE_URL")
    if database_url:
        database_url = normalize_database_url(database_url)
        try:
            pool = get_connection_pool(database_url)
            conn = pool.getconn(timeout=10.0)
            return DatabaseConnection(
                conn, postgres=True, pool_release=lambda c: pool.putconn(c)
            )
        except Exception:
            try:
                import psycopg
                from psycopg.rows import dict_row
            except ImportError as exc:
                raise RuntimeError(
                    "PostgreSQL support requires psycopg. Install requirements.txt."
                ) from exc
            connection = psycopg.connect(
                database_url,
                row_factory=dict_row,
                prepare_threshold=None,
            )
            return DatabaseConnection(connection, postgres=True)

    connection = sqlite3.connect(db_path, timeout=10)
    connection.row_factory = sqlite3.Row
    return DatabaseConnection(connection, postgres=False)

