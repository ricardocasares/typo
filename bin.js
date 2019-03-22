#!/usr/bin/env node
const sade = require("sade");
const prog = sade("typo");
const generate = require(".");
const pkg = require("./package.json");

prog.version(pkg.version);

prog
  .command("type <glob>", "", { default: true })
  .describe("Look for React components and generate type definitions")
  .option("-m, --mod", "Change definition module name", null)
  .option("-g, --git", "Avoid files ignored by .gitignore", true)
  .example(`"**/*.jsx"`)
  .example(`"src/**/*component.js" -m @pkgz/ui`)
  .example(`"**/!(index|*spec)*.jsx" -m @pkgz/ui`)
  .action((src, { mod, git }) => {
    const types = generate({ src, mod, git });
    if (!types.length) {
      return console.log(`No matching files found in "${src}"`);
    }

    types.forEach(t => console.log(t));
  });

prog.parse(process.argv);
