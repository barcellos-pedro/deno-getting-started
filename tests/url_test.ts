import {
  assertEquals,
  assertSpyCall,
  assertSpyCalls,
  assertThrows,
  spy,
} from "./deps.ts";

Deno.test("url test", () => {
  const url = new URL("./foo.js", "https://deno.land/");
  assertEquals(url.href, "https://deno.land/foo.js");
});

Deno.test("request test", { permissions: { net: true } }, async () => {
  const url = "https://api.github.com/users/barcellos-pedro";
  const response = await fetch(url);
  assertEquals(response.status, 200);
  assertEquals(response.ok, true);
  await response.body?.cancel();
});

Deno.test("numbers with steps", async (test) => {
  const a = 1;
  const b = 2;
  const sum = (a: number, b: number) => a + b;
  const sub = (b: number, a: number) => b - a;

  await test.step("sum", () => {
    assertEquals(sum(a, b), 3);
  });

  await test.step("sub", () => {
    assertEquals(sub(b, a), 1);
  });

  await test.step("sum call", () => {
    const sumSpy = spy(sum);
    sumSpy(a, b);
    assertSpyCall(sumSpy, 0, { args: [a, b], returned: 3 });
  });

  await test.step("sub call", () => {
    const subSpy = spy(sub);
    subSpy(b, a);
    assertSpyCalls(subSpy, 1);
  });
});

Deno.test("throw error", () => {
  assertThrows(
    () => {
      throw new Error("Panic!");
    },
    Error,
    "Panic!",
  );
});
