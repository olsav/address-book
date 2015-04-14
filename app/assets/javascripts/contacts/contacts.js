angular.module('appContacts', ['appCommon', 'dbResource']).config([
  '$stateProvider', 'BREADCRUMBS_TEMPLATE', function ($stateProvider, BREADCRUMBS_TEMPLATE) {
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
          templateUrl: BREADCRUMBS_TEMPLATE
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
          templateUrl: BREADCRUMBS_TEMPLATE
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
          templateUrl: BREADCRUMBS_TEMPLATE
        },
        '@': {
          templateUrl: 'assets/templates/contacts/views/contact_form.html',
          controller: 'ContactForm'
        }
      }
    });
  }
]);