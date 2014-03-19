'use strict';

angular.module('argenomaWebApp')
	.controller('ConfigurationCtrl', function($scope, $routeParams, Configuration) {
		Configuration.get($routeParams.configItemType)
			.success(function(response) {
				$scope.configItems = response;
				$scope.configItemType = $routeParams.configItemType;
			})
			.error(function() {});
	});