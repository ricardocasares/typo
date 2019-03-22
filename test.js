const path = require("path");
const generator = require("./");

test("should generate type definitions", () => {
  const out = generator({ src: path.join(process.cwd(), "fixtures/") });
  expect(out).toMatchSnapshot();
});

test("should generate type definitions with module name", () => {
  const out = generator({
    mod: "@pkgz/ui",
    src: path.join(process.cwd(), "fixtures/")
  });
  expect(out).toMatchSnapshot();
});

test("should generate type definitions with given extension", () => {
  const out = generator({
    ext: ".js",
    src: path.join(process.cwd(), "fixtures/")
  });
  expect(out).toMatchSnapshot();
});
