angular.module('appContacts').controller('ContactForm', [
  '$scope', '$state', '$injector', function ($scope, $state, $injector) {
    'use strict';

    angular.extend($scope, $state.$current.locals.globals, {
      dbResource: $injector.get('dbResource')
    });

    $scope.sync = function () {
      if (angular.isDefined($scope.$stateParams.id)) {
        $scope.contact = $scope.dbResource.get({
          'table': 'contacts',
          'id': $scope.$stateParams.id
        });
      } else {
        $scope.contact = new $scope.dbResource({
          // Default values are here
        });
      }
    };

    $scope.initialize = function () {
      $scope.sync();
    };

    //TODO: put into reusable service
    $scope.getRandomColor = function () {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    $scope.save = function () {
      var promise;

      if (angular.isDefined($scope.$stateParams.id)) {
        promise = $scope.contact.$update($scope.$stateParams);
      } else {
        //TODO make sure color code differs from background
        $scope.contact.avatar = {
          color: $scope.getRandomColor(),
          background: $scope.getRandomColor()
        };

        promise = $scope.contact.$save();
      }

      //TODO: handle rejected case
      promise.then(function () {
        $state.go('contacts.list');
      });
    };
  }
]);
