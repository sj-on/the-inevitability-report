module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Create a collection from all markdown files in the sectors folder
  eleventyConfig.addCollection("sectors", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/sectors/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};