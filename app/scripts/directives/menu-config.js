'use strict';

angular.module('argenomaWebApp')
	.directive('menuConfig', function() {
		return {
			replace: true,
			restrict: 'A',
			templateUrl: 'views/partials/menu-configuration.html'
		};
	});