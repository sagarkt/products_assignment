( function() {
  'use strict';

  angular.module('angularApp.home_page', [
    'angularApp.common', 'ui.router',
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    config
  ]);

  function config($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('homePage',{
        url: '/',
        templateUrl: 'angular-app/home_page/templates/home_page.html',
        controller: 'HomePageCtrl'
      });

    $urlRouterProvider.otherwise('/');
  };

})();
