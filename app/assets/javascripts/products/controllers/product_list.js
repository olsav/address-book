angular.module('products').controller('productList', [
  '$scope', 'dbResource', '$sce', '$location', 'localStorageService', function($scope, dbResource, $sce, $location, storage) {
    'use strict';

    $scope.title = 'Product list';
    $scope.products = dbResource.query({'table': 'products'});
    $scope.processHtml = function(html) {
      return $sce.trustAsHtml(html);
    };

    $scope.cart = {
      items: storage.get('cart')||{},
      count: function(code){
        var cnt = 0;
        for(var i in $scope.app.cart.items){
          if (!code || code==i){
            cnt += $scope.app.cart.items[i]
          }
        }
        return cnt;
      },
      addPackage: function(code, count){
        //$scope.app.cart.items[id] = $scope.app.cart.items[id] ? $scope.app.cart.items[id] + count : count;
        //$scope.app.cart._save();
      },
      _save: function(){
        storage.set('cart', $scope.app.cart.items);
      }
    };

    $scope.add2cart = function(count, item, checkout) {
      //$scope.cart.addPackage(item, count);
      if (checkout) {
        //$scope.checkout();
      }
    };
  }
]);
