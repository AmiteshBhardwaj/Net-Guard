"""Database connection helpers for local SQLite and hosted PostgreSQL."""

from __future__ import annotations

import os
import sqlite3
from pathlib import Path
from typing import Any


class DatabaseConnection:
    def __init__(self, connection: Any, *, postgres: bool) -> None:
        self._connection = connection
        self._postgres = postgres

    def execute(self, query: str, parameters: tuple[Any, ...] | list[Any] = ()) -> Any:
        if self._postgres:
            query = _postgres_placeholders(query)
        return self._connection.execute(query, parameters)

    def commit(self) -> None:
        self._connection.commit()

    def rollback(self) -> None:
        self._connection.rollback()

    def close(self) -> None:
        self._connection.close()


def _postgres_placeholders(query: str) -> str:
    return query.replace("?", "%s")


def connect_database(db_path: Path) -> DatabaseConnection:
    database_url = os.getenv("NETGUARD_DATABASE_URL") or os.getenv("DATABASE_URL")
    if database_url:
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
