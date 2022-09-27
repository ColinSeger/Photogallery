module.exports = function (eleventyConfig) {
    //This makes it so that eleventy pushes the folder into public when it builds

    //Image folder
    eleventyConfig.addWatchTarget("./src/images");
    eleventyConfig.addPassthroughCopy("./src/images");

    //scripts folder
    eleventyConfig.addWatchTarget("./src/script");
    eleventyConfig.addPassthroughCopy("./src/script");

    //data folder
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