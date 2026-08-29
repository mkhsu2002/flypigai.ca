ALTER TABLE event_inbox ADD COLUMN dead_lettered_at TEXT;
CREATE INDEX event_inbox_dead_letter_idx ON event_inbox(dead_lettered_at);
