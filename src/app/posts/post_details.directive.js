require('../app');

(function() {
  "use strict";

  angular.module("blog").directive("postDetails", function () {
    return {
      scope: {
        ngModel: "=", // ng-model
      }
    };
  });
}());
