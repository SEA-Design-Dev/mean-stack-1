"use strict";

require("../app.js");
var token = require("../token.js");

(function () {

  angular.module("intellyBlog").service("BlogsService", ["$http", function ($http) {
    var urlRoot = "/api/blogs";

    var Blog = {
      get: function (id) {
        return $http.get("https://api.github.com/users/hollislau/gists", {
          headers: {
            "Authorization": "token " + token.oauthToken,
          }
        });

        // if (angular.isDefined(id)) {
        //   return ;
        // } else {
        //   return ;
        // }
        // if (angular.isDefined(id)) {
        //   return $http.get(urlRoot + "/" + id);
        // } else {
        //   return $http.get(urlRoot);
        // }
      },
      update: function (model) {
        return $http.put(urlRoot + "/" + model._id, model);
      },
      create: function (model) {
        return $http.post(urlRoot, model);
      },
      delete: function (model) {
        return $http.delete(urlRoot + "/" + model._id);
      }
    };
    return Blog;
  }]);

})();
