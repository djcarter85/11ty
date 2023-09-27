module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/CNAME");

  return {
    dir: {
      input: "src"
    },
    pathPrefix: "11ty"
  }
};