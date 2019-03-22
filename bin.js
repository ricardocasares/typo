#!/usr/bin/env node
const sade = require("sade");
const prog = sade("typo");
const generate = require(".");

prog.version("0.0.1");

prog
  .command("type <src>", "", { default: true })
  .describe("Look for React components and generate type definitions")
  .option("-m, --mod", "Change definition module name", null)
  .option("-e, --ext", "Change file extension to look for", "jsx")
  .example("type src -m @pkgz/ui -e jsx")
  .action((src, { mod, ext }) => {
    const types = generate({ src, mod, ext: `.${ext}` });
    if (!types.length) {
      return console.log(`No files found in "${src}" with extension "${e}"`);
    }

    types.forEach(t => console.log(t));
  });

prog.parse(process.argv);
