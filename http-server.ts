import { serve } from "https://deno.land/std@0.163.0/http/server.ts";

const todoUrl = "https://jsonplaceholder.typicode.com/todos/1";

const handler = async (_request: Request): Promise<Response> => {
  const resp = await fetch(todoUrl, {
    headers: {
      accept: "application/json",
    },
  });

  const { body, status } = resp;

  return new Response(body, {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

console.log("Listening on http://localhost:8080");
serve(handler);
