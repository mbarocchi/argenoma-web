'use strict';

angular.module('argenomaWebApp')
	.directive('mainNavbar', function() {
		return {
			replace: true,
			restrict: 'A',
			templateUrl: 'views/partials/main-navbar.html'
		};
	});