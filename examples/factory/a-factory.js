var angular = require('angular-node');

angular.module('aModule', [])

.factory('aFactory', function () {
    'use strict';

    var aMethod = function () {
        return 'a';
    };

    var bMethod = function () {
        return 'b';
    }

    return {
        aMethod: aMethod,
        bMethod: bMethod
    };
});