( function() {
  'use strict';

  angular.module('angularApp.common').service('ProductService',
    ['PromiseFactory', serviceFunction]);

  function serviceFunction(PromiseFactory) {
    this.filterProducts = function(filter) {
      var requestDetails = {
        url: '/products/filter.json',
        method: "GET",
        params: filter
      };
      return PromiseFactory.generateHttpPromise(requestDetails);
    };

    this.getProductById = function(productId) {
      var requestDetails = {
        url: '/products/'+ productId +'.json',
        method: "GET"
      };
      return PromiseFactory.generateHttpPromise(requestDetails);
    }
  }
})();
