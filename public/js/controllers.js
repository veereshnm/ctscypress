'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', ['$timeout', '$location', '$scope', '$http', '$route', function ($timeout, $location, $scope, $http, $route) {
    

  }]).controller('childCtrl', ['$timeout', '$location', '$scope', '$http', '$route', function ($timeout, $location, $scope, $http, $route) {
    $scope.$parent.currentpage = $location.path();
  }]);