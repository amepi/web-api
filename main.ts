import { Hono, HTTPException, Context, ContextRenderer } from "hono/mod.ts";
import { compress, logger, prettyJSON, serveStatic } from "hono/middleware.ts";
import { css } from "hono/helper.ts";
import {
  getRouterName,
  inspectRoutes,
  showRoutes,
} from "hono/helper/dev/index.ts"; // dev-only
/**
 * - [ ] https://hono.dev/guides/best-practices#building-a-larger-application
 * - [ ] implement exception handling middleware https://hono.dev/api/exception
 *   - [ ] Consequentely implement error response (and ok response ?)
 * - [ ] testing helper https://hono.dev/helpers/testing
 * - [ ] zod middleware validator https://hono.dev/guides/validation#zod-validator-middleware
 * - [ ] RPC / Client https://hono.dev/guides/rpc
 * - [ ] https://github.com/honojs/middleware/tree/main/packages/auth-js#how-to-use
 */

/**
 * @todo Write the documentation.
 * @todo Implement this function.
 */
const app = new Hono();

app.use("*", logger()); // dev-only

app.get("/", (c: Context) => {
  // console.log(
  //   `${new Date().toLocaleString()} => main endpoint has been called`,
  // );
  const userAgent = c.req.header('User-Agent')
  console.log(userAgent);

  return c.text("Hello Hono!");
});

app.get("/users", (c: Context) => {
  const userAgent = c.req.header('User-Agent')
  console.log(userAgent);
  
  // console.log(
  //   `${new Date().toLocaleString()} => main endpoint has been called`,
  // );
  return c.text("Hello Hono!");
});

app.get("/notfound", (c: Context) => {
  return c.notFound();
});

app.get("/redirect", (c: Context) => {
  return c.redirect('/');
});

Deno.serve(app.fetch);

// dev-only-start
showRoutes(app);
// dev-only-end