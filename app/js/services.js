'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource']).
	factory('Post', function($resource) {
		return $resource('posts/:postId.json', {}, {
			query: {
				method: 'GET',
				params: {
					postId: 'posts' // default :postId value
				},
				isArray: true
			}
		});		
	}).
  value('version', '0.1');
