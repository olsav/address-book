angular.module('products', ['appCommon']).config([
  '$stateProvider', function($stateProvider) {
    'use strict';

    $stateProvider.state('products', {
      url: '/products',
      abstract: true,
      templateUrl: 'assets/templates/products/products.html'
    });

    $stateProvider.state('products.list', {
      url: '/list',
      views: {
        'sidebar': {
          templateUrl: 'assets/templates/products/product_sidebar.html',
          controller: 'productSidebar'
        },
        'list': {
          templateUrl: 'assets/templates/products/product_list.html',
          controller: 'productList'
        }
      }
    });

    $stateProvider.state('products.view', {
      url: '/view/:id',
      views: {
        '@': {
          templateUrl: 'assets/templates/products/product_view.html',
          controller: 'productView'
        }
      }
    })
  }
]);
