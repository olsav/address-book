angular.module('appContacts').factory('Contact', [
  '$resource', '$http', function ($resource, $http) {
    'use strict';

    return $resource('https://pitneydb.firebaseio.com/contacts/:id.json', { id: '@id' }, {
      query: {
        method: 'GET',
        isArray: true,

        transformResponse: $http.defaults.transformResponse.concat([
          function (data) {
            var items = [];

            angular.forEach(data, function (object, id) {
              var item = angular.extend(object, {
                id: id
              });

              items.push(item);
            });

            return items;
          }
        ])
      },

      update: {
        method: 'PUT'
      }
    });
  }
]);
