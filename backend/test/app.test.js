import assert from "node:assert/strict";
import { once } from "node:events";
import { after, before, test } from "node:test";
import { connectDB } from "../config/db.js";

process.env.CORS_ORIGINS = "https://jobstack.example";
const { default: app } = await import("../app.js");

let server;
let baseUrl;

before(async () => {
  server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  if (server) {
    server.close();
    await once(server, "close");
  }
});

test("serves the API health route", async () => {
  const response = await fetch(baseUrl);

  assert.equal(response.status, 200);
  assert.equal(await response.text(), "API is running...");
});

test("allows configured production origins through CORS", async () => {
  const response = await fetch(baseUrl, {
    headers: { Origin: "https://jobstack.example" },
  });

  assert.equal(response.headers.get("access-control-allow-origin"), "https://jobstack.example");
  assert.equal(response.headers.get("access-control-allow-credentials"), "true");
});

test("does not grant CORS access to unconfigured origins", async () => {
  const response = await fetch(baseUrl, {
    headers: { Origin: "https://untrusted.example" },
  });

  assert.equal(response.headers.get("access-control-allow-origin"), null);
});

test("fails fast when the MongoDB connection string is missing", async () => {
  const originalUri = process.env.MONGO_URI;
  delete process.env.MONGO_URI;

  try {
    await assert.rejects(connectDB(), /MONGO_URI environment variable is required/);
  } finally {
    if (originalUri === undefined) {
      delete process.env.MONGO_URI;
    } else {
      process.env.MONGO_URI = originalUri;
    }
  }
});
