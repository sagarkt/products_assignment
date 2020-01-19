( function() {
  'use strict';

  angular.module('angularApp', ['templates',
    'angularApp.products', 'angularApp.home_page'])
  .config([
    '$httpProvider', config
  ]);

  function config($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  };

})();
