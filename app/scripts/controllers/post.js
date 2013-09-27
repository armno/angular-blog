'use strict';

angular.module('angularBlogApp')
  .controller('PostCtrl', function ($scope, $routeParams) {
    $scope.slug = $routeParams.slug;
  })
  .controller('PostDetailCtrl', function($scope, $routeParams, Post) {

		$scope.post =  Post.get({
			postId: $routeParams.slug
		}, function(post) {
			$scope.mainTitle = post.title;	
		});

		$scope.setTitle = function(title) {
			$scope.mainTitle = title;
		};
  })
	.controller('PostListController', function($scope, Post) {
		$scope.posts = Post.query();
		$scope.orderProp = 'title';
	});
