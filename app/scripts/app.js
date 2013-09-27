'use strict';

angular.module('angularBlogApp', ['blogcatFilters', 'blogServices'])
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

