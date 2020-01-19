( function() {
  'use strict';

  angular.module('angularApp.products', [
    'ui.router',
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    config
  ]);

  function config($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('productsIndex',{
        url: '/products/',
        templateUrl: 'angular-app/products/templates/index.html',
        controller: 'ProductsCtrl'
      });

    $urlRouterProvider.otherwise('/products/');
  };

})();
