'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }).directive('subMenu', function() {
    return {
      templateUrl: 'partials/sub-menu.html',
      restrict: 'E',
      replace: true,
      link: function(scope, element, attrs, controllers) {
        element.addClass(attrs.currentItem);
      }
    };
  });;

