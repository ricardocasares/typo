const path = require("path");
const glob = require("globby");
const { generateFromFile } = require("react-to-typescript-definitions");

module.exports = ({ src, mod = null, git = true }) =>
  glob.sync(src, { gitignore: git }).map(p => {
    try {
      return generateFromFile(mod, p);
    } catch (e) {
      return `/* Error: Could not create type definitions for: ${p}\n${
        e.message
      }\n*/\n\n`;
    }
  });
