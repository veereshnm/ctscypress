'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', ['ngRoute',
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'childCtrl',
      isServices: false
    }).
    when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'childCtrl',
      isServices: false
    }).
    when('/careers', {
      templateUrl: 'partials/careers.html',
      controller: 'childCtrl',
      isServices: false
    }).    
    when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'childCtrl',
      isServices: false
    }).
    when('/titlesearch', {
      templateUrl: 'partials/titlesearch.html',
      controller: 'childCtrl',
      isServices: true
    }).
    when('/commitmenttyping', {
      templateUrl: 'partials/commitmenttyping.html',
      controller: 'childCtrl',
      isServices: true
    }).
    when('/pagenotfound', {
      templateUrl: 'partials/pagenotfound.html',
      controller: 'childCtrl',
      isServices: false
    }).
    when('/taxservices', {
      templateUrl: 'partials/taxservices.html',
      controller: 'childCtrl',
      isServices: true
    }).
    when('/settlementservices', {
      templateUrl: 'partials/settlementservices.html',
      controller: 'childCtrl',
      isServices: true
    }).                    
    otherwise({
      redirectTo: '/home'
    });

  $locationProvider.html5Mode(true);
});
