'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
	.directive('fbImg', [function() {
		// usage <fb-img data-fb-id="armno">
		return {
			restrict: 'E',
			link: function(scope, element, attr) {
				var fbId = attr.fbId;
				element.append('<img src="//graph.facebook.com/' + fbId + '/picture">');
			}
		};
	}]);
