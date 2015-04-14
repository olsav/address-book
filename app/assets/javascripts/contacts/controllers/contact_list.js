angular.module('appContacts').controller('ContactList', [
  '$scope', '$state', '$injector', function ($scope, $state, $injector) {
    'use strict';

    angular.extend($scope, $state.$current.locals.globals, {
      dbResource: $injector.get('dbResource')
    });

    $scope.sync = function () {
      $scope.contacts = $scope.dbResource.query({'table': 'contacts'});
    };

    $scope.initialize = function () {
      $scope.sync();
    };

    $scope.remove = function (contact) {
      var index = $scope.contacts.indexOf(contact);

      console.log('Removing');
      console.log(contact);
      console.log($scope.contacts);

      contact.$remove(function () {
        $scope.contacts.splice(index, 1);
      });
    };
  }
]);