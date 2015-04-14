angular.module('dbResource', []).factory('dbResource', [
    '$resource', '$http', function($resource, $http) {
        'use strict';

        return $resource('https://pitneydb.firebaseio.com/:table/:id.json', {table: '@table', id: '@id'}, {
            query: {
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