const dirPath = Deno.args[0];

for await (const entry of Deno.readDir(dirPath)) {
  console.log(entry);
  if (entry.isFile) {
    const file = await Deno.readTextFile(entry.name);
    console.log(file);
  }
  console.log("=".repeat(50));
}
