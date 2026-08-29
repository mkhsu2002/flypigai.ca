import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  acceptPersistedEvent,
  auditDigest,
  bindingsReady,
  deliveryDisposition,
  normalizeEmail,
  signUnsubscribeToken,
  verifyUnsubscribeToken,
} from "../functions/_shared/events.ts";

test("fails closed when required D1 or Queue bindings are missing", () => {
  assert.equal(bindingsReady({}), false);
  assert.equal(bindingsReady({ FLYPIG_DB: { prepare() {} } }), false);
  assert.equal(bindingsReady({ FLYPIG_DB: { prepare() {} }, OUTBOUND_EVENTS: { send() {} } }), true);
});

test("persists before enqueue and records the queue boundary", async () => {
  const calls = [];
  const result = await acceptPersistedEvent({
    idempotencyKey: "request-1",
    persist: async () => { calls.push("persist"); return { eventId: "event-1", duplicate: false }; },
    enqueue: async (eventId) => { calls.push(`enqueue:${eventId}`); },
    markQueued: async (eventId) => { calls.push(`queued:${eventId}`); },
    markQueuePending: async () => { calls.push("pending"); },
  });
  assert.deepEqual(calls, ["persist", "enqueue:event-1", "queued:event-1"]);
  assert.deepEqual(result, { eventId: "event-1", duplicate: false, queued: true });
});

test("duplicate idempotency keys do not enqueue a second effect", async () => {
  let enqueues = 0;
  const result = await acceptPersistedEvent({
    idempotencyKey: "request-1",
    persist: async () => ({ eventId: "event-1", duplicate: true }),
    enqueue: async () => { enqueues += 1; },
    markQueued: async () => {},
    markQueuePending: async () => {},
  });
  assert.equal(enqueues, 0);
  assert.deepEqual(result, { eventId: "event-1", duplicate: true, queued: false });
});

test("queue failure leaves a persisted event recoverable", async () => {
  const calls = [];
  const result = await acceptPersistedEvent({
    idempotencyKey: "request-2",
    persist: async () => { calls.push("persist"); return { eventId: "event-2", duplicate: false }; },
    enqueue: async () => { calls.push("enqueue"); throw new Error("queue unavailable"); },
    markQueued: async () => { calls.push("queued"); },
    markQueuePending: async (eventId, code) => { calls.push(`pending:${eventId}:${code}`); },
  });
  assert.deepEqual(calls, ["persist", "enqueue", "pending:event-2:queue_unavailable"]);
  assert.deepEqual(result, { eventId: "event-2", duplicate: false, queued: false });
});

test("newsletter delivery rechecks unsubscribed state", () => {
  assert.equal(deliveryDisposition("newsletter.welcome", "unsubscribed"), "suppressed");
  assert.equal(deliveryDisposition("newsletter.welcome", "subscribed"), "deliver");
  assert.equal(deliveryDisposition("contact.received", undefined), "deliver");
});

test("audit uses a deterministic digest rather than raw PII", async () => {
  const digest = await auditDigest({ email: "Person@Example.com", action: "accepted" });
  assert.match(digest, /^[a-f0-9]{64}$/);
  assert.doesNotMatch(digest, /example/i);
  assert.equal(normalizeEmail(" Person@Example.COM "), "person@example.com");
});

test("unsubscribe tokens are signed, expiring and tamper-evident", async () => {
  const token = await signUnsubscribeToken("person@example.com", "test-secret", 2_000);
  assert.deepEqual(await verifyUnsubscribeToken(token, "test-secret", 1_500), { email: "person@example.com", expiresAt: 2_000 });
  await assert.rejects(() => verifyUnsubscribeToken(token, "wrong-secret", 1_500), /Invalid unsubscribe token/);
  await assert.rejects(() => verifyUnsubscribeToken(token, "test-secret", 2_001), /expired/);
});

test("manual replay is per-event, protected and clears dead-letter state", () => {
  const worker = readFileSync(new URL("../worker/src/index.ts", import.meta.url), "utf8");
  assert.match(worker, /pathname\.match/);
  assert.match(worker, /A-Za-z0-9-/);
  assert.match(worker, /authorization.*REPLAY_TOKEN/);
  assert.match(worker, /dead_lettered_at = NULL/);
  assert.doesNotMatch(worker, /replay-all|replayAll/);
});
