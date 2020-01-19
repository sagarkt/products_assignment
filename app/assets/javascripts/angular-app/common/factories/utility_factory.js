( function() {
  'use strict';

  angular.module('angularApp.common')
  .factory('UtilityFactory', [
      function() {
        var Utils = {};

        Utils.setUrl = function(searchObject, callback){
          var params = []
          angular.forEach(searchObject, function(value, key) {
            params.push(key + '=' + value);
          })
          callback(searchObject, params.join('&'));
        }

        return Utils;
      }
  ]);
})();
