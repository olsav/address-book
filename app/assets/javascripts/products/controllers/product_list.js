angular.module('products').controller('productList', [
  '$scope', 'dbResource', function($scope, dbResource) {
    'use strict';

    $scope.title = 'Product list';
    $scope.products = dbResource.query({'table': 'products'});
  }
]);
