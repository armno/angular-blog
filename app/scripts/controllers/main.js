'use strict';

var app = angular.module('angularBlogApp');

app.controller('MainCtrl', function($scope, $http) {
  $http.get('posts/posts.json').success(function(data) {
    $scope.posts = data;
  });
  $scope.orderProp = 'comments';
});
