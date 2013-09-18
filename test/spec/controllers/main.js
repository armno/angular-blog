'use strict';

describe('Controller: MainCtrl', function() {
  describe('MainCtrl', function() {
    beforeEach(module('angularBlogApp'));
    var MainCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      MainCtrl = $controller('MainCtrl', {
        $scope: scope
      });
    }));
    it('should create "posts" model with 4 posts', function() {
      expect(scope.posts.length).toBe(4);
    });
  });

  describe('Post list view', function() {
    beforeEach(function() {
      browser().navigateTo('../../app/index.html');
    });

    it('should filter post list as user types into the search box', function() {
      expect(repeater('.posts li').count()).toBe(4);
    })
  });
});
