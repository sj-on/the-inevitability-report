module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // custom filter to sort by the weight we added to markdown
  eleventyConfig.addFilter("sortByAttribute", function(values, path) {
    return values.slice().sort((a, b) => {
      let aVal = path.split('.').reduce((obj, key) => obj[key], a);
      let bVal = path.split('.').reduce((obj, key) => obj[key], b);
      return aVal - bVal;
    });
  });

  // Inside module.exports = function(eleventyConfig) { ...
eleventyConfig.addFilter("date", (dateObj, format) => {
    const date = new Date();
    return date.getFullYear(); // Simple version for the footer year
});
  
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