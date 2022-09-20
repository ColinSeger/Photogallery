module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/images");
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addWatchTarget("./src/photos");
    eleventyConfig.addPassthroughCopy("./src/photos");
    eleventyConfig.addWatchTarget("./src/script");
    eleventyConfig.addPassthroughCopy("./src/script");
    return {
      dir: {
        input: "src",
        output: "public"
      },
      passthroughFileCopy: true
    };
  };