'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('PostListController', ['$scope', '$http', function($scope, $http) {
		// get posts data from posts/all.json
		$http({
			method: 'GET',		
			url: 'posts/all.json' 
		}).success(function(posts) {
		  $scope.posts = posts;	
		});
  }])
  .controller('PostDetailController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
		// get post content from slug
		$http
			.get('posts/' + $routeParams.postId + '.json')
			.success(function(post) {
				$scope.post = post
			});
  }]);