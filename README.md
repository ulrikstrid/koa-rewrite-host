# koa-rewrite-host

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
