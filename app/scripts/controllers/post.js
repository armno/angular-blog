'use strict';

angular.module('angularBlogApp')
  .controller('PostCtrl', function ($scope) {
    var posts = [
      {
        title: 'Post Title #1',
        slug: 'post-title-1'
      },
      {
        title: 'Post Title #2',
        slug: 'post-title-2'
      },
      {
        title: 'Post Title #3',
        slug: 'post-title-3'
      }
    ];

    var currentPost;
    posts.forEach(function(element, index) {
    });
  });
