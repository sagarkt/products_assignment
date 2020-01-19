( function() {
  'use strict';

  angular.module('angularApp', ['templates', 'angularApp.products'])
  .config([
    '$httpProvider', config
  ]);

  function config($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  };

})();
