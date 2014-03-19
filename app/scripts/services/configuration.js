'use strict';

angular.module('argenomaWebApp')
  .service('Configuration', function($http) {
    var get = function(itemType) {
      return $http({
        url: '/data/config_' + itemType + '.json',
        method: 'GET'
      });
    };
    return {
      get: get
    };
  });