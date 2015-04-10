angular.module('products').controller('productList', [
  '$scope', 'productsResource', function($scope, productsResource) {
    'use strict';

    $scope.title = 'Product list';
    $scope.products = productsResource.query();
  }
]);
