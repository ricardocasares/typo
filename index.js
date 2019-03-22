const { join } = require("path");
const { lstatSync, readdirSync, existsSync } = require("fs");
const { generateFromFile } = require("react-to-typescript-definitions");

const isDirectory = source => lstatSync(source).isDirectory();

const getLastPart = ext => d => d.concat("/", d.split("/").pop(), ext);

const getDirectories = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory);

const generateTypesForDirectory = ({ src, mod = null, ext = ".jsx" }) =>
  getDirectories(src)
    .map(getLastPart(ext))
    .filter(existsSync)
    .map(p => generateFromFile(mod, p));

module.exports = generateTypesForDirectory;
