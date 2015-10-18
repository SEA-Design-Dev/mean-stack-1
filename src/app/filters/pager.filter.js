require("../app.js");
require("./offset.filter.js");

angular.module("intellyBlog").filter("pager", ["$filter", function ($filter) {
  return function (results, pagerObj) {
    var filteredResults;

    filteredResults = $filter("offset")(results, pagerObj.getOffset());
    filteredResults = $filter("limitTo")(filteredResults, pagerObj.perPage);
    return filteredResults;
  };
}]);
