// compress file (zip)

const source = await Deno.open("./naruto.mp4", { read: true });

const target = await Deno.open("./naruto.mp4.gz", {
  create: true,
  write: true,
});

const zipFile = new CompressionStream("gzip");

source.readable.pipeThrough(zipFile).pipeTo(target.writable);
