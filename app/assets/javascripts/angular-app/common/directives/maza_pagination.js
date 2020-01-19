( function() {
  angular.module('angularApp.common')
  .directive('mazaPagination', function() {

    var linker = function(scope, element, attrs, controller, transcludeFn) {
      scope.changePage = scope.changePage || blankFunction;
      scope.totalItems = scope.totalItems || 0;

      function blankFunction() {
        console.log('function not provided')
      }

      scope.navigateToLastPage = function() {
        if(scope.perPageItems > 1)
          scope.changePage(Math.round(scope.totalItems / scope.perPageItems + 0.5));
        if(scope.perPageItems == 1)
          scope.changePage(Math.round(scope.totalItems / scope.perPageItems + 0.5) - 1);
      };

      scope.range = function() {
        var input = [];

        var max = Math.round(scope.totalItems / scope.perPageItems + 0.5);
        if(scope.perPageItems == 1) max -= 1;
        if(max > (scope.currentPage + 5)) max = scope.currentPage + 5;

        var offset = 1;
        if(scope.currentPage > 5) offset = Number(scope.currentPage) - 5;

        for(var i = offset; i <= max; i++) {
          input.push(i);
        }
        return input;
      };

    };

    return {
      restrict: 'E',
      link: linker,
      scope: {
        changePage: '=',
        totalItems: '=',
        currentPage: '=',
        perPageItems: '=',
      },
      templateUrl: 'angular-app/common/templates/maza_pagination.html'
    };
  });
})();
