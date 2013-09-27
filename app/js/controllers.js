'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('PostListController', ['$scope', function($scope) {
		$scope.posts = [{
			title: 'Post number one',
			slug: 'post-number-one'
		},
		{
			title: 'Post number two',
			slug: 'post-number-two'
		},
		{
			title: 'Post number three',
			slug: 'post-number-three'
		}];
  }])
  .controller('PostDetailController', [function() {

  }]);