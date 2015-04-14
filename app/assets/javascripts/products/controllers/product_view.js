angular.module('products').controller('productView', [
  '$scope', '$state', '$injector', function($scope, $state, $injector) {
    'use strict';

    //extending current scope with stateParams (which contains id) and a resource
    angular.extend($scope, $state.$current.locals.globals, {
      productsResource: $injector.get('productsResource')
    });

    $scope.initialize = function() {
      if (angular.isDefined($scope.$stateParams.id)) {
        $scope.product = $scope.productsResource.get($scope.$stateParams);
      } else {
        //$state.go('products.list');
      }
    };
  }
]);