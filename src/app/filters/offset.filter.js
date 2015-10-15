require("../app.js");

angular.module("intellyBlog").filter("offset", ["$filter", function ($filter) {
  return function (input, start) {
    if (input) {
      start = parseInt(start, 10);
      console.log(input.slice(start));
      return input.slice(start);
    };
  };
}]);
