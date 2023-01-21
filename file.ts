// file read with buffer

const file = await Deno.open("message.txt", { read: true });
const fileInfo = await file.stat();

if (fileInfo.isFile) {
  const fileSize = fileInfo.size;
  console.log("fileSize in bytes: ", fileSize);

  const buf = new Uint8Array(fileSize);
  // or Using ArrayBuffer
  // const buf = new Uint8Array(new ArrayBuffer(fileSize));
  console.log("buffer to read file\n", buf);

  const bytesRead = await file.read(buf); // n bytes
  console.log("bytesRead: ", bytesRead);

  const text = new TextDecoder().decode(buf); // "hello world"
  console.log("text\n", text);

  // buffer will be modified with file content
  console.log("buffer with content\n", buf);
}

file.close();
