module.exports = function (eleventyConfig) {
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/icons");
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
  eleventyConfig.setLibrary("md", markdownIt(options));
  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
