import { serve } from "https://deno.land/std@0.165.0/http/server.ts";

/**
 * Serve a video stream.
 * Use file as stream to avoid loading the whole file into memory.
 */
serve(async (_request: Request): Promise<Response> => {
  const file = await Deno.open("./assets/video.mp4", { read: true });
  const fileInfo = await file.stat();
  const fileStream = file.readable;

  return new Response(fileStream, {
    headers: {
      "content-type": "video/mp4",
      "content-length": String(fileInfo.size),
    },
  });
});
