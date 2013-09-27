'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('PostListController', function($scope, $http) {
		// get posts data from posts/all.json
		$http({
			method: 'GET',		
			url: 'posts/all.json' 
		}).success(function(posts) {
		  $scope.posts = posts;	
		});
  })
  .controller('PostDetailController', [function() {

  }]);