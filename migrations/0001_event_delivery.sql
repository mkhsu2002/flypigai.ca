PRAGMA foreign_keys = ON;

CREATE TABLE subscribers (
  id TEXT PRIMARY KEY,
  normalized_email TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL CHECK (status IN ('subscribed', 'unsubscribed')),
  consent_source TEXT NOT NULL,
  consent_at TEXT NOT NULL,
  unsubscribed_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE contact_requests (
  id TEXT PRIMARY KEY,
  normalized_email TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  locale TEXT NOT NULL,
  source_ip_hash TEXT NOT NULL,
  handling_state TEXT NOT NULL DEFAULT 'received',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE event_inbox (
  id TEXT PRIMARY KEY,
  event_type TEXT NOT NULL,
  idempotency_key TEXT NOT NULL UNIQUE,
  domain_record_id TEXT NOT NULL,
  state TEXT NOT NULL CHECK (state IN ('pending', 'queued', 'processing', 'sent', 'suppressed', 'failed')),
  attempt_count INTEGER NOT NULL DEFAULT 0,
  provider_id TEXT,
  error_code TEXT,
  queued_at TEXT,
  processed_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX event_inbox_recovery_idx ON event_inbox(state, updated_at);
CREATE INDEX event_inbox_domain_idx ON event_inbox(domain_record_id);

CREATE TABLE event_audit (
  id TEXT PRIMARY KEY,
  event_id TEXT NOT NULL,
  action TEXT NOT NULL,
  actor TEXT NOT NULL,
  metadata_hash TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (event_id) REFERENCES event_inbox(id)
);

CREATE INDEX event_audit_event_idx ON event_audit(event_id, created_at);

CREATE TABLE request_rate_limits (
  bucket TEXT NOT NULL,
  actor_hash TEXT NOT NULL,
  request_count INTEGER NOT NULL DEFAULT 1,
  updated_at TEXT NOT NULL,
  PRIMARY KEY (bucket, actor_hash)
);

CREATE INDEX request_rate_limits_updated_idx ON request_rate_limits(updated_at);
