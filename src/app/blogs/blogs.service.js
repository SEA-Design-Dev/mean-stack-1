"use strict";

require("../app.js");
var token = require("../token.js");

(function () {

  angular.module("intellyBlog").service("BlogsService", ["$http", function ($http) {

    var Blog = {
      get: function (id) {
        if (angular.isDefined(id)) {
          return $http.get("https://api.github.com/gists/" + id, {
            headers: {
              "Authorization": "token " + token.oauthToken,
            }
          });
        } else {
          return $http.get("https://api.github.com/users/hollislau/gists", {
            headers: {
              "Authorization": "token " + token.oauthToken,
            }
          });
        }
      },
      update: function (model) {
        return $http.put(urlRoot + "/" + model._id, model);
      },
      create: function (model) {
        return $http.post("https://api.github.com/gists", model, {
          headers: {
            "Authorization": "token " + token.oauthToken,
          }
        });
      },
      delete: function (model) {
        return $http.delete("https://api.github.com/gists/" + model.id, {
          headers: {
            "Authorization": "token " + token.oauthToken,
          }
        });
        // return $http.delete(urlRoot + "/" + model._id);
      }
    };
    return Blog;
  }]);

})();
