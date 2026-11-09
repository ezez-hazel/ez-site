const eleventyPackage = require("../../node_modules/@11ty/eleventy/package.json");

module.exports = {
  build: {
    datetime: new Date().toISOString(),
    year: new Date().getFullYear(),
    generator: "Eleventy",
    version: eleventyPackage.version,
  },
  github: "https://github.com/ezez-hazel/ez-site",
  backgroudImages: [
    "https://i0.wp.com/i0.hdslb.com/bfs/archive/69fd2727010571b577654f194ce966834a182a74.jpg?w=1920",
    "https://i0.wp.com/i0.hdslb.com/bfs/archive/79a103d98ed93ded15351f71d837abf235c9ceeb.jpg?w=1920",
    "https://i2.wp.com/i2.hdslb.com/bfs/archive/be19ea2696a15ae05286948a9b04740386535ca0.jpg?w=1920",
    // "https://i0.wp.com/i0.hdslb.com/bfs/new_dyn/33b08a314ed463ecc4ff19294f1648221298779265.gif?w=1920",
    "https://i0.wp.com/i0.hdslb.com/bfs/new_dyn/742d4ead8aa1ab671bcfae80e26841921298779265.jpg?w=1920",
    "https://i0.wp.com/i0.hdslb.com/bfs/new_dyn/56c7281fd968f80bb9d3d56058d6a4831298779265.png?w=1920",
    "https://i0.wp.com/i0.hdslb.com/bfs/new_dyn/5f432caad4fbf170cfacf1faca6de2aa3747560609025092.png?w=1080",
  ],
};
