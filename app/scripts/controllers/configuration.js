'use strict';

angular.module('argenomaWebApp')
	.controller('ConfigurationCtrl', ['$scope', '$routeParams', 'Configuration',
		function($scope, $routeParams, Configuration) {
			$scope.config = new Configuration();

			// Configuration.get($routeParams.configItemType)
			// 	.success(function(response) {
			// 		$scope.configItems = response;
			// 		$scope.configItemType = $routeParams.configItemType;
			// 	})
			// 	.error(function() {});
		}
	]);