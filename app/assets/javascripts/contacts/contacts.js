angular.module('appContacts', ['appCommon', 'spinner']).config([
  '$stateProvider', function ($stateProvider) {
    'use strict';

    $stateProvider.state('contacts', {
      url: '/contacts',
      abstract: true,
      templateUrl: 'assets/templates/contacts/views/contacts.html',
      data: {
        breadcrumbProxy: 'contacts.list'
      }
    });

    $stateProvider.state('contacts.list', {
      url: '/list',
      data: {
        displayName: 'Contact list'
      },
      views: {
        'breadcrumbs': {
          templateUrl: 'assets/templates/common/breadcrumbs.tpl.html'
        },
        'list': {
          templateUrl: 'assets/templates/contacts/views/contact_list.html',
          controller: 'ContactList'
        }
      }
    });

    $stateProvider.state('contacts.create', {
      url: '/create',
      data: {
        displayName: 'Create new contact'
      },
      views: {
        'breadcrumbs@contacts.create': {
          templateUrl: 'assets/templates/common/breadcrumbs.tpl.html'
        },
        '@': {
          templateUrl: 'assets/templates/contacts/views/contact_form.html',
          controller: 'ContactForm'
        }
      }
    });

    $stateProvider.state('contacts.edit', {
      url: '/edit/:id',
      data: {
        displayName: 'Edit contact'
      },
      views: {
        'breadcrumbs@contacts.edit': {
          templateUrl: 'assets/templates/common/breadcrumbs.tpl.html'
        },
        '@': {
          templateUrl: 'assets/templates/contacts/views/contact_form.html',
          controller: 'ContactForm'
        }
      }
    });
  }
]);