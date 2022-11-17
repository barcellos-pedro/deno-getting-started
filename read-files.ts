// import { copy } from "https://deno.land/std@0.163.0/streams/conversion.ts";
// copy() is a utility function that copies from a Reader to a Writer.
// useful for converting between different types of streams.

const filenames = Deno.args;

for (const filename of filenames) {
  //   const file = await Deno.open(filename);
  //   await copy(file, Deno.stdout);
  //   file.close();

  // simple version
  const text = await Deno.readTextFile(filename);
  console.log(text);
}
