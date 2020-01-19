( function() {
  'use strict';

  angular.module('angularApp.common').controller('HeaderCtrl',
    ['$scope', '$rootScope', '$state', 'SessionService', HeaderCtrl]);

  function HeaderCtrl($scope, $rootScope, $state, SessionService) {
    function init() {
      $scope.currentUser = undefined;
      SessionService.getCurrentUser().then(onSuccess, onFailure);

      function onSuccess(response) {
        $scope.currentUser = response.data;
      }
    }

    $rootScope.$watch('currentUser', function(newVal, oldVal) {
      if(newVal != oldVal)
        $scope.currentUser = newVal;
    })

    init();

    $scope.logOut = function() {
      SessionService.signOut().then(onSuccess, onFailure);

      function onSuccess(response) {
        $scope.currentUser = undefined;
        $state.go('homePage');
      }
    }

    function onFailure(response) {
      console.log('Failed Response: ', response);
    }
  }
})();
