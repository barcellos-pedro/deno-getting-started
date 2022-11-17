// deno-lint-ignore-file no-explicit-any
import express from "npm:express";

const app = express();

app.get("/", (_req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(3000, () => console.log("app running on port 3000"));
