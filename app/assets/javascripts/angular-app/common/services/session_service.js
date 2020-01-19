( function() {
  'use strict';

  angular.module('angularApp.common').service('SessionService',
    ['PromiseFactory', serviceFunction]);

  function serviceFunction(PromiseFactory) {
    this.signIn = function(userDetails) {
      var requestDetails = {
        url: '/users/signin.json',
        method: "POST",
        data: {
          user: userDetails
        }
      };
      return PromiseFactory.generateHttpPromise(requestDetails);
    };

    this.signOut = function() {
      var requestDetails = {
        url: '/users/signout.json',
        method: "DELETE"
      };
      return PromiseFactory.generateHttpPromise(requestDetails);
    };

    this.getCurrentUser = function() {
      var requestDetails = {
        url: '/users/get_current_user.json',
        method: "GET"
      };
      return PromiseFactory.generateHttpPromise(requestDetails);
    };
  }
})();
