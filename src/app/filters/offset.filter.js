require("../app.js");

angular.module("intellyBlog").filter("offset", ["$filter", function ($filter) {
  return function (input, start) {
    if (input) {
      start = parseInt(start, 10);
      return input.slice(start);
    }
  };
}]);
