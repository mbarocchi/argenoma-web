'use strict';

angular.module('argenomaWebApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/configuration', {
        templateUrl: 'views/configuration.html',
      })
      .when('/configuration/:configItemType', {
        templateUrl: 'views/configuration-item.html',
        controller: 'ConfigurationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });