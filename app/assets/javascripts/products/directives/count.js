'use strict';

angular.module('products').directive('count', [function() {
  return {
    templateUrl: 'assets/templates/products/directives/count.html',
    restrict: 'E',
    scope:{
      value:'=model',
      min:'@min',
      max:'@max'
    },
    controller: ['$scope', function($scope){
      $scope.min = $scope.min || 1;
      $scope.max = $scope.max || 9;
      $scope.value = $scope.value || $scope.min;

      $scope.setValue = function(){

        if ($scope.value > $scope.max ){
          $scope.value = $scope.max;
        }
        if ($scope.value < $scope.min ){
          $scope.value = $scope.min;
        }
        $scope.value = parseInt($scope.value, 10);
        console.log($scope.value);
      };
      $scope.setValue();
    }]
  };
}]);