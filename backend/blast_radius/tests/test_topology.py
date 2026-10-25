import sqlite3

from backend.blast_radius.topology import ensure_blast_schema, seed_demo_topology


def test_seeding_preserves_customized_assets():
    connection = sqlite3.connect(":memory:")
    connection.row_factory = sqlite3.Row
    ensure_blast_schema(connection)
    connection.execute(
        "INSERT INTO assets (id, name, ip, zone, criticality, role, modeled, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        ("dmz-server", "Customer Web", "10.44.0.8", "Custom", 3, "custom role", 1, "healthy"),
    )

    seed_demo_topology(connection)

    asset = connection.execute("SELECT name, ip, role FROM assets WHERE id = ?", ("dmz-server",)).fetchone()
    assert tuple(asset) == ("Customer Web", "10.44.0.8", "custom role")


def test_seeding_adds_new_demo_assets_and_links_to_existing_topology():
    connection = sqlite3.connect(":memory:")
    connection.row_factory = sqlite3.Row
    ensure_blast_schema(connection)
    connection.execute(
        "INSERT INTO assets (id, name, ip, zone, criticality, role, modeled, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        ("dmz-server", "DMZ Target Server", "10.0.0.15", "DMZ", 5, "target", 1, "healthy"),
    )

    seed_demo_topology(connection)

    web_server = connection.execute("SELECT name, ip FROM assets WHERE id = ?", ("dmz-server",)).fetchone()
    isolated = connection.execute("SELECT id FROM assets WHERE id = ?", ("isolated-workstation",)).fetchone()
    added_link = connection.execute("SELECT src, dst FROM links WHERE id = 9").fetchone()
    assert tuple(web_server) == ("Web Server", "10.0.2.14")
    assert isolated is not None
    assert tuple(added_link) == ("workstation-02", "auth-server")
