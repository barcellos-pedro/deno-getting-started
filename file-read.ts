import { serve } from "https://deno.land/std@0.165.0/http/server.ts";

serve(async (_request: Request): Promise<Response> => {
  const content = await Deno.readTextFile("./assets/hello.txt");

  return new Response(content, {
    headers: {
      "Content-type": "text/plain",
    },
  });
});
