angular.module('creatives', ['appCommon']).config([
  '$stateProvider', function($stateProvider) {

    $stateProvider.state('creatives', {
      url: '/creatives',
      abstract: true,
      templateUrl: 'assets/templates/creatives/creatives.html'
    });

    $stateProvider.state('creatives.list', {
      url: '/list',
      views: {
        'sidebar': {
          templateUrl: 'assets/templates/creatives/creative_sidebar.html',
          controller: 'creativeSidebar'
        },
        'list': {
          templateUrl: 'assets/templates/creatives/creative_list.html',
          controller: 'creativeList'
        }
      }
    });
  }
]);
