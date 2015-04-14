angular.module('products', ['appCommon', 'dbResource']).config([
  '$stateProvider', 'BREADCRUMBS_TEMPLATE', function($stateProvider, BREADCRUMBS_TEMPLATE) {
    'use strict';

    $stateProvider.state('products', {
      url: '/products',
      abstract: true,
      templateUrl: 'assets/templates/products/products.html',
      data: {
        breadcrumbProxy: 'products.list'
      }
    });

    $stateProvider.state('products.list', {
      url: '/list',
      data: {
        displayName: 'Product list'
      },
      views: {
        'breadcrumbs': {
          templateUrl: BREADCRUMBS_TEMPLATE
        },
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
      data: {
        displayName: 'Product view'
      },
      views: {
        'breadcrumbs@products.view': {
          templateUrl: BREADCRUMBS_TEMPLATE
        },
        'sidebar@products.view': {
          templateUrl: 'assets/templates/products/product_sidebar.html',
          controller: 'productSidebar'
        },
        '@': {
          templateUrl: 'assets/templates/products/product_view.html',
          controller: 'productView'
        }
      }
    })
  }
]);
