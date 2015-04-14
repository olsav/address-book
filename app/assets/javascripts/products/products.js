angular.module('products', ['appCommon', 'angularUtils.directives.uiBreadcrumbs']).config([
  '$stateProvider', function($stateProvider) {
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
          templateUrl: 'assets/templates/common/breadcrumbs.tpl.html'
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
          templateUrl: 'assets/templates/common/breadcrumbs.tpl.html'
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
