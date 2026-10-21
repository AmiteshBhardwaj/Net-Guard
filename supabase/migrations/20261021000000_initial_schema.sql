create table if not exists alerts (
    id text primary key,
    ts double precision,
    src text,
    dst text,
    dport integer,
    label text,
    prob double precision,
    severity text,
    reasons text,
    blocked integer,
    protocol text
);

create table if not exists attacks (
    id text primary key,
    ts double precision,
    attack text,
    status text,
    detected integer default 0
);

create table if not exists blocks (
    ip text primary key,
    ts double precision
);

create table if not exists threat_detector_logs (
    id text primary key,
    ts double precision,
    time_step integer,
    packet_size double precision,
    src_port integer,
    dst_port integer,
    protocol text,
    protocol_code integer,
    is_anomaly integer,
    anomaly_score double precision,
    confidence double precision,
    severity text,
    reasons text,
    action_taken text
);

create index if not exists idx_tdl_ts on threat_detector_logs(ts);
create index if not exists idx_tdl_anomaly on threat_detector_logs(is_anomaly);

create table if not exists assets (
    id text primary key,
    name text,
    ip text,
    zone text,
    criticality integer,
    role text,
    modeled integer default 0,
    status text default 'healthy'
);

create table if not exists links (
    id integer primary key,
    src text,
    dst text,
    ports text,
    protocol text,
    trust text,
    weight double precision,
    bidirectional integer default 1,
    active integer default 1
);

create table if not exists blast_incidents (
    id text primary key,
    ts_hit double precision,
    ts_contained double precision,
    origin_asset text,
    attack_type text,
    mitre_id text,
    source_ip text,
    before_json text,
    after_json text,
    radius_reduction double precision
);
