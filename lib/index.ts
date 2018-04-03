import Koa = require("koa");

/**
 * Rewrite `host` to `mount`.
 *
 * @param {String} host
 * @param {String} mount
 * @return {Function}
 * @api public
 */

const rewrite = (host: string, mount: string): Koa.Middleware => (
  ctx,
  next
) => {
  const orig = ctx.url;

  if (host === ctx.host) {
    ctx.url = mount + orig;

    return next().then(() => {
      ctx.url = orig;
    });
  }

  return next();
};

export default rewrite;
