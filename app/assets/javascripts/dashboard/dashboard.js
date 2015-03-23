angular.module('dashboard', ['appCommon']).config([
  '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'assets/templates/dashboard/views/dashboard.html',
        controller: 'Dashboard'
    });

    $urlRouterProvider.otherwise('/dashboard');

  }
]);
