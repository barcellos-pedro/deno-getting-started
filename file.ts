// file read with buffer

const file = await Deno.open("message.txt", { read: true });
const fileInfo = await file.stat();

if (fileInfo.isFile) {
  const fileSize = fileInfo.size;
  console.log(fileSize);

  const buf = new Uint8Array(fileSize);
  console.log(buf);

  const bytesRead = await file.read(buf); // n bytes
  console.log(bytesRead);

  const text = new TextDecoder().decode(buf); // "hello world"
  console.log(text);

  // buffer will be modified with file content
  console.log(buf);
}

file.close();
