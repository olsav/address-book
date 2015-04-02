angular.module('appContacts', ['appCommon', 'spinner']).config([
  '$stateProvider', function ($stateProvider) {
    'use strict';

    $stateProvider.state('contacts', {
      url: '/contacts',
      abstract: true,
      templateUrl: 'assets/templates/contacts/views/contacts.html'
    });

    $stateProvider.state('contacts.list', {
      url: '/list',

      views: {
        'list': {
          templateUrl: 'assets/templates/contacts/views/contact_list.html',
          controller: 'ContactList'
        }
      }
    });

    $stateProvider.state('contacts.create', {
      url: '/create',

      views: {
        '@': {
          templateUrl: 'assets/templates/contacts/views/contact_form.html',
          controller: 'ContactForm'
        }
      }
    });

    $stateProvider.state('contacts.edit', {
      url: '/edit/:id',

      views: {
        '@': {
          templateUrl: 'assets/templates/contacts/views/contact_form.html',
          controller: 'ContactForm'
        }
      }
    });
  }
]);