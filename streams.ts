// streams

// source
const readable = new ReadableStream({
  pull(controller) {
    controller.enqueue("hello");
    controller.enqueue("world");
    controller.close();
  },
});

// Convert Uint8Array to string
const Uint8ArrayToString = new TransformStream({
  transform(chunk, controller) {
    console.log(chunk);
    const decoder = new TextDecoder();
    controller.enqueue(decoder.decode(chunk));
  },
});

// log what comes from readable stream
const writable = new WritableStream({
  write(chunk) {
    console.log(chunk);
  },
});

// stream log 1
readable.pipeTo(writable);

// stream log 2
// log what comes from console input
Deno.stdin.readable.pipeThrough(Uint8ArrayToString).pipeTo(writable);

// gets console input stream and write on txt file
const file = await Deno.open("message.txt", { create: true, write: true });
Deno.stdin.readable.pipeTo(file.writable);