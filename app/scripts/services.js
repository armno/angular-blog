angular.module('blogServices', ['ngResource'])
	.factory('Post', function($resource) {
		return $resource('posts/:postId.json', {}, {
			query: {
				method: 'GET',
				params: {
					postId: 'posts'
				},
				isArray: true
			}
		});
	});
