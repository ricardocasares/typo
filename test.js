const path = require("path");
const generator = require("./");

test("should generate type definitions", () => {
  const out = generator({ src: "fixtures/**/!(index)*.jsx" });
  expect(out).toMatchSnapshot();
});

test("should generate type definitions with module name", () => {
  const out = generator({
    mod: "@pkgz/ui",
    src: "fixtures/**/!(index)*.jsx"
  });
  expect(out).toMatchSnapshot();
});

test("should accept different glob patterns", () => {
  const out = generator({
    src: "fixtures/(Alert|Panel)/!(index)*.{js,jsx}"
  });
  expect(out).toMatchSnapshot();
});
