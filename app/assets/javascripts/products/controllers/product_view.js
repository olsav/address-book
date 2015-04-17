angular.module('products').controller('productView', [
  '$scope', '$state', '$injector', function($scope, $state, $injector) {
    'use strict';

    //extending current scope with stateParams (which contains id) and a resource
    angular.extend($scope, $state.$current.locals.globals, {
      dbResource: $injector.get('dbResource')
    });

    $scope.initialize = function() {
      if (angular.isDefined($scope.$stateParams.id)) {
        $scope.product = $scope.dbResource.get({
          'table': 'products',
          'id': $scope.$stateParams.id
        },
        function(product) {
          if (product.images.length > 0) {
            $scope.mainImageUrl = product.images[0];
          }
        });

        $scope.setImage = function(imageUrl) {
          $scope.mainImageUrl = imageUrl;
        };
      } else {
        //$state.go('products.list');
      }
    };
  }
]);