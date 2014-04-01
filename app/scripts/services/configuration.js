'use strict';

angular.module('argenomaWebApp')
  .provider('Configuration', function() {
    // Method for instantiating
    this.$get = ['$resource',
      function($resource) {
        var Config = $resource('http://www.argenoma.com/api/api.php', {}, {
          update: {
            method: 'PUT'
          }
        })

        return Config;
      }
    ];
  });