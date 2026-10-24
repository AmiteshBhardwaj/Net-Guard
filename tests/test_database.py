from __future__ import annotations

import os
import sqlite3
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from app.database import DatabaseConnection, connect_database, normalize_database_url


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

    def test_normalize_database_url_encodes_special_characters_in_password(self):
        raw = "postgresql://postgres.xxx:myP@ss@ini&gWin123@aws-0-ap-southeast-2.pooler.supabase.com:6543/postgres?sslmode=require"
        normalized = normalize_database_url(raw)
        self.assertEqual(
            normalized,
            "postgresql://postgres.xxx:myP%40ss%40ini%26gWin123@aws-0-ap-southeast-2.pooler.supabase.com:6543/postgres?sslmode=require",
        )

    def test_normalize_database_url_preserves_already_encoded_url(self):
        url = "postgresql://postgres.xxx:myP%40ss%26123@aws-0-ap-southeast-2.pooler.supabase.com:6543/postgres"
        self.assertEqual(normalize_database_url(url), url)


if __name__ == "__main__":
    unittest.main()
