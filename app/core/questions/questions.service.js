'use strict';

angular.
    module('data').
    factory('Question', ['$resource',
        function($resource){
            return $resource('data/questions.json', {}, {
                query: {
                    method: 'Get',
                    isArray: true
                }
            })
        }])