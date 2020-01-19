( function() {
  'use strict';

  angular.module('angularApp.products').controller('ProductsCtrl',
    ['$scope', '$state', ProductsCtrl]);

  function ProductsCtrl($scope, $state) {
    function init() {
      // console.log('$state', $state);
    }

    init();

    function onFailure(response) {
      console.log('Failed Response: ', response);
    }
  }
})();
