const request = require("supertest");
const app = require("../server/index");
import "babel-polyfill";

const testURL =
  "https://programmingwithmosh.com/backend/graphql/testing-graphql-queries-with-apollo-client/";
const param = {
  method: "POST",
  credentials: "same-origin",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
  urlText: testURL,
};

test("Response should response with object", async () => {
  jest.setTimeout(30000);
  const res = await request(app).post("/submit").send(param);

  expect(typeof res.body).toBe("object");
});

test("Response with code 200", async () => {
  jest.setTimeout(30000);
  const res = await request(app).post("/submit").send(param);

  expect(res.statusCode).toBe(200);
});

test("Response object should have some expected output like 'irony' ", async () => {
  jest.setTimeout(30000);
  const res = await request(app).post("/submit").send(param);

  expect(res.body).toHaveProperty("irony");
});
