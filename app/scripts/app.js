'use strict';

angular.module('angularBlogApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'MainCtrl'
      })
      .when('/posts/:slug', {
        templateUrl: 'views/post.html',
        controller: 'PostDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
