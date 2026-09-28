const eleventyPackage = require("../../node_modules/@11ty/eleventy/package.json");

module.exports = {
  build: {
    datetime: new Date().toISOString(),
    year: new Date().getFullYear(),
    generator: "Eleventy",
    version: eleventyPackage.version
  },
  github: "https://github.com/ezez-hazel/ez-site"
};