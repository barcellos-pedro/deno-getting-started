import {
  Application,
  Context,
  Router,
} from "https://deno.land/x/oak@v11.1.0/mod.ts";

const router = new Router();
router.get("/", (ctx: Context, next) => {
  ctx.response.body = JSON.stringify({ message: "Hello World!" });
  ctx.response.status = 200;
  ctx.response.headers.set("content-type", "application/json");
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
