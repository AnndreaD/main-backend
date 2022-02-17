# main-backend

set up postgres locally.
log in to psql

1. CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

2.create role create db for user main

3. with user main create table : CREATE TABLE feature_flags (
   id uuid primary key default uuid_generate_v4(),
  name varchar not null,
  value boolean not null,
  target_type varchar not null,
  target_selector varchar,
  created_at timestamp default NOW(),
  updated_at timestamp default NOW()
);

verify with select * from feature_flags;


