// Set up JSX with Deno
// Docs https://deno.com/deploy/docs/using-jsx

/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.34/mod.ts";
import { serve } from "https://deno.land/std@0.165.0/http/server.ts";

function App() {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home- Video</title>
      </head>
      <body>
        <h1>Vídeo test</h1>
        <video controls width="500" src="video.mp4"></video>
        <a style="display: block" download="video-test.mp4" href="video.mp4">
          download
        </a>
      </body>
    </html>
  );
}

const handler = async (request: Request) => {
  // serve static files
  const url = new URL(request.url);

  if (url.pathname === "/video.mp4") {
    const video = await Deno.readFile("./assets/video.mp4");
    return new Response(video, {
      headers: {
        "Content-type": "video/mp4",
      },
    });
  }

  return new Response(renderSSR(<App />), {
    headers: {
      "Content-type": "text/html; charset=utf-8",
    },
  });
};

serve(handler, {
  port: 8080,
  onListen: () => console.log("Listening on http://localhost:8080"),
});
