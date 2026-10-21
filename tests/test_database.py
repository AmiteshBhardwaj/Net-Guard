from __future__ import annotations

import os
import sqlite3
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from app.database import DatabaseConnection, connect_database


class DatabaseConnectionTests(unittest.TestCase):
    def test_sqlite_fallback_uses_mapping_rows_and_upserts(self):
        with tempfile.TemporaryDirectory() as directory, patch.dict(
            os.environ,
            {"NETGUARD_DATABASE_URL": "", "DATABASE_URL": ""},
        ):
            connection = connect_database(Path(directory) / "test.sqlite3")
            try:
                connection.execute("CREATE TABLE sample (id TEXT PRIMARY KEY, value TEXT)")
                connection.execute(
                    "INSERT INTO sample (id, value) VALUES (?, ?) "
                    "ON CONFLICT(id) DO UPDATE SET value=excluded.value",
                    ("one", "first"),
                )
                connection.execute(
                    "INSERT INTO sample (id, value) VALUES (?, ?) "
                    "ON CONFLICT(id) DO UPDATE SET value=excluded.value",
                    ("one", "updated"),
                )
                row = connection.execute(
                    "SELECT value FROM sample WHERE id = ?", ("one",)
                ).fetchone()
                self.assertEqual(row["value"], "updated")
            finally:
                connection.close()

    def test_postgres_connection_uses_psycopg_placeholders(self):
        class FakeConnection:
            query = ""
            parameters = ()

            def execute(self, query, parameters):
                self.query = query
                self.parameters = parameters
                return self

        raw_connection = FakeConnection()
        connection = DatabaseConnection(raw_connection, postgres=True)
        connection.execute("SELECT * FROM sample WHERE id = ? AND active = ?", ("one", 1))

        self.assertEqual(
            raw_connection.query,
            "SELECT * FROM sample WHERE id = %s AND active = %s",
        )
        self.assertEqual(raw_connection.parameters, ("one", 1))

    def test_supabase_migration_creates_all_application_tables(self):
        migration = (
            Path(__file__).resolve().parents[1]
            / "supabase"
            / "migrations"
            / "20261021000000_initial_schema.sql"
        )
        with sqlite3.connect(":memory:") as connection:
            connection.executescript(migration.read_text())
            tables = {
                row[0]
                for row in connection.execute(
                    "SELECT name FROM sqlite_master WHERE type = 'table'"
                )
            }

        self.assertTrue(
            {
                "alerts",
                "attacks",
                "blocks",
                "threat_detector_logs",
                "assets",
                "links",
                "blast_incidents",
            }.issubset(tables)
        )


if __name__ == "__main__":
    unittest.main()
