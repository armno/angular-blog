'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('PostListController', ['$scope', '$http', 'Post', function($scope, $http, Post) {
		// get posts data from posts/all.json
//		$http({
//			method: 'GET',		
//			url: 'posts/all.json' 
//		}).success(function(posts) {
//		  $scope.posts = posts;	
//		});
		$scope.posts = Post.query();
  }])
  .controller('PostDetailController', ['$scope', '$routeParams', '$http', 'Post', function($scope, $routeParams, $http, Post) {
		// get post content from slug
//		$http
//			.get('posts/' + $routeParams.postId + '.json')
//			.success(function(post) {
//				$scope.post = post
//			});
		$scope.post = Post.get({
			postId: $routeParams.postId
		});
  }]);