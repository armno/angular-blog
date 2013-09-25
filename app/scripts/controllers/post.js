'use strict';

angular.module('angularBlogApp')
  .controller('PostCtrl', function ($scope, $routeParams) {
    $scope.slug = $routeParams.slug;
  })
  .controller('PostDetailCtrl', function($scope, $routeParams, $http) {
    $http.get('posts/' + $routeParams.slug + '.json').success(function(data) {
      $scope.post = data;
    });
  });
