( function() {
  'use strict';

  angular.module('angularApp.products').controller('ProductsCtrl',
    ['$scope', '$state', '$stateParams', 'ProductService', 'UtilityFactory',
    ProductsCtrl]);

  function ProductsCtrl($scope, $state, $stateParams, ProductService, Utils) {
    $scope.filter = {
      'pageLimit': 25,
      'pageNo': 1,
      'searchText': '',
      'searchType': 'name'
    };

    $scope.availableSearchTypes = [
      {label: 'Name', value: 'name'},
      {label: 'Model', value: 'model'},
      {label: 'Brand', value: 'brand'},
      {label: 'Year', value: 'year'},
      {label: 'RAM', value: 'ram'},
      {label: 'External Storage', value: 'external_storage'}
    ];

    function init() {
      var urlParams = $stateParams;
      angular.forEach(Object.keys(urlParams), function(key) {
        $scope.filter[key] = urlParams[key];
      });
      delete $scope.filter['#'];
      $scope.filter['pageLimit'] = 25;
      $scope.filter['pageNo'] = $scope.filter['pageNo'] || 1;
      $scope.filter['totalProducts'] = $scope.filter['totalProducts'] || 100;
      filterProducts();
    }

    $scope.filterProducts = function() {
      Utils.setUrl(angular.copy($scope.filter), redirectToSearchPage);
    }

    $scope.changePage = function(pageNo) {
      $scope.filter.pageNo = pageNo;
      Utils.setUrl(angular.copy($scope.filter), redirectToSearchPage);
    }

    $scope.exportToXls = function() {
      ProductService.exportProducts().then(onSuccess, onFailure);

      function onSuccess(response) {
        var pdf = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;' });
        saveAs(pdf, 'products.xlsx');
        // var xls = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;' });
        // var link = window.document.createElement('a');
        // link.href = window.URL.createObjectURL(xls);
        // link.download = link.href.split('/').pop() + '.xlsx';
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
      }
    }

    function redirectToSearchPage(params) {
      $state.go('productsSearch', params)
    }

    function filterProducts() {
      ProductService.filterProducts($scope.filter).then(onFilterProducts, onFailure);
    }

    function onFilterProducts(response) {
      $scope.products = response.data.products;
      $scope.filter.totalProducts = response.data.totalProducts;
    }

    init();

    function onFailure(response) {
      console.log('Failed Response: ', response);
    }
  }
})();
