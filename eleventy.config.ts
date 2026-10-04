import type { UserConfig } from "@11ty/eleventy";
import * as esbuild from "esbuild";
import path from "node:path";
import markdownIt from "markdown-it";

export default function (eleventyConfig: UserConfig) {
  const options = {
    html: true,
    breaks: true,
    linkify: true,
  };

  eleventyConfig.addPassthroughCopy("src/css");
//   eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/icons");
  eleventyConfig.addPassthroughCopy("src/simusanji");

  eleventyConfig.addFilter("sortByDataField", function (values: Array<any>, field: string) {
    return values.slice().sort((a, b) => {
      const aVal = a.data[field];
      const bVal = b.data[field];

      if (aVal < bVal) return -1;
      if (aVal > bVal) return 1;
      return 0;
    });
  });

  eleventyConfig.addTemplateFormats("ts");
  eleventyConfig.addExtension("ts", {
    outputFileExtension: "js",
    compile: async function (inputContent: string | Uint8Array<ArrayBufferLike>, inputPath: string) {
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

  eleventyConfig.setLibrary("md", markdownIt(options));

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
}
