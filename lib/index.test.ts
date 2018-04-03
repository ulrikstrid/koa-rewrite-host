import request = require("supertest");
import Koa = require("koa");

import rewrite from "../lib";

describe("koa-rewrite-host", () => {
  it("can rewrite localhost:4010 to /localhost", done => {
    const app = new Koa();

    app.use(rewrite("localhost:4010", "/localhost"));
    app.use(ctx => {
      ctx.body = ctx.request.url;
    });

    const server = app.listen(4010);

    return request("localhost:4010")
      .get("/")
      .then(response => {
        expect(response.text).toBe("/localhost/");

        server.close();

        done();
      });
  });

  it("can rewrite lvh.me:4020 to /lvh", done => {
    const app = new Koa();

    app.use(rewrite("lvh.me:4020", "/lvh"));
    app.use(ctx => {
      ctx.body = ctx.request.url;
    });

    const server = app.listen(4020);

    return request("lvh.me:4020")
      .get("/")
      .then(response => {
        expect(response.text).toBe("/lvh/");

        server.close();

        done();
      });
  });

  it("doesn't rewrite if it doesn't match", done => {
    const app = new Koa();

    app.use(rewrite("lvh.me:4030", "/lvh"));
    app.use(ctx => {
      ctx.body = ctx.request.url;
    });

    const server = app.listen(4030);

    return request("localhost:4030")
      .get("/")
      .then(response => {
        expect(response.text).toBe("/");

        server.close();

        done();
      });
  });
});
