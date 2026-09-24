const eleventyPackage = require("../../node_modules/@11ty/eleventy/package.json");

module.exports = {
  build: {
    datetime: new Date().toISOString(),
    generator: "Eleventy",
    version: eleventyPackage.version
  },
  github: "https://github.com/ezez-hazel/xn--4gqa980aba.vip"
};