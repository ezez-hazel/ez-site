module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/icons');
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};