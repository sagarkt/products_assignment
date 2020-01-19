( function() {
  'use strict';

  angular.module('angularApp.home_page').controller('HomePageCtrl',
    ['$scope', '$rootScope', '$state', 'SessionService', HomePageCtrl]);

  function HomePageCtrl($scope, $rootScope, $state, SessionService) {
    function init() {
    }

    init();

    $scope.logIn = function() {
      if($scope.signIn.$invalid) return;
      var userDetails = {email: $scope.email, password: $scope.password};
      SessionService.signIn(userDetails).then(onSuccess, onFailure);

      function onSuccess(response) {
        $rootScope.currentUser = response.data;
        $state.go('productsIndex');
      }
    }

    function onFailure(response) {
      console.log('Failed Response: ', response);
    }
  }
})();
