( function() {
  'use strict';

  angular.module('angularApp.products').controller('ProductCtrl',
    ['$scope', '$stateParams', 'ProductService',
    ProductCtrl]);

  function ProductCtrl($scope, $stateParams, ProductService) {

    function init() {
      ProductService.getProductById($stateParams.productId)
                    .then(onSuccess, onFailure);

      function onSuccess(response) {
        $scope.product = response.data;
      }
    }

    init();

    function onFailure(response) {
      console.log('Failed Response: ', response);
    }
  }
})();
