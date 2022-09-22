module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/images");
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addWatchTarget("./src/script");
    eleventyConfig.addPassthroughCopy("./src/script");
    eleventyConfig.addWatchTarget("./src/_data");
    eleventyConfig.addPassthroughCopy("./src/_data");
    
    return {
      dir: {
        input: "src",
        output: "public"
      },
      passthroughFileCopy: true
    };
  };