# koa-rewrite-host

[![CircleCI](https://circleci.com/gh/ulrikstrid/koa-rewrite-host/tree/master.svg?style=svg)](https://circleci.com/gh/ulrikstrid/koa-rewrite-host/tree/master)

URL rewrite middleware for koa depending on host.

**_Notice: only supports `koa@2`._**

## Installation

```
$ npm install koa-rewrite-host
```

## Examples

Rewrite using a when host is localhost, rewriting `/home` to `/localhost/home`.

```js
app.use(rewrite("localhost:3000", "/localhost"));
```

## License

MIT
