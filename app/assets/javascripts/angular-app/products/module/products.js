( function() {
  'use strict';

  angular.module('angularApp.products', [
    'angularApp.common', 'ui.router',
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    config
  ]);

  function config($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('productsSearch',{
        url: '/products?pageLimit&pageNo&searchText&searchType',
        templateUrl: 'angular-app/products/templates/index.html',
        controller: 'ProductsCtrl'
      });

    $stateProvider
      .state('productDetail',{
        url: '/product/:productId',
        templateUrl: 'angular-app/products/templates/show.html',
        controller: 'ProductCtrl'
      });
  };

})();
