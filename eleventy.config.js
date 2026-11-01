module.exports = function (eleventyConfig) {
  let markdownIt = require("markdown-it");
  let markdown = require("./md.js");
  let esbuild = require("esbuild");
  let path = require("path");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/icons");
  eleventyConfig.addPassthroughCopy("src/image");
  eleventyConfig.addPassthroughCopy("src/simusanji");
  eleventyConfig.addFilter("sortByDataField", function (values, field) {
    return values.slice().sort((a, b) => {
      let aVal = a.data[field];
      let bVal = b.data[field];

      if (aVal < bVal) return -1;
      if (aVal > bVal) return 1;
      return 0;
    });
  });
  eleventyConfig.addTemplateFormats("ts");
  eleventyConfig.addExtension("ts", {
    outputFileExtension: "js",
    compile: async function (inputContent, inputPath) {
      const parsed = path.parse(inputPath);
      if (parsed.name.startsWith("_")) {
        return;
      }

      return async () => {
        const result = await esbuild.transform(inputContent, {
          loader: "ts",
          target: "es2022",
          minify: process.env.NODE_ENV === "production",
          sourcemap: process.env.NODE_ENV !== "production",
        });

        return result.code;
      };
    },
  });
  eleventyConfig.setLibrary("md", markdown);
  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};