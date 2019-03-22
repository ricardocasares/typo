const path = require("path");
const glob = require("globby");
const { generateFromFile } = require("react-to-typescript-definitions");

module.exports = ({ src, mod = null, git = true }) =>
  glob.sync(src, { gitignore: git }).map(p => generateFromFile(mod, p));
