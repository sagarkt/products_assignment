( function() {
  'use strict';

  angular.module('angularApp.common').factory('PromiseFactory',
    ['$http', '$q', HomePageCtrl]);

  function HomePageCtrl($http, $q) {
    var factory = {}

    factory.generateHttpPromise = function (requestDetails) {
      var deferred = $q.defer();
      requestDetails.headers = requestDetails.headers || {};

      if(requestDetails.method.toUpperCase() == 'GET') {
        requestDetails.params = requestDetails.params || {};
      }

      $http(requestDetails).then(function (data) {
        deferred.resolve(data);
      }, function (data, status, fnc, httpObj) {
        var errorResponse = {
          data: data,
          status: status
        };
        deferred.reject(errorResponse);
      });

      return deferred.promise;
    };

    return factory;
  }
})();
