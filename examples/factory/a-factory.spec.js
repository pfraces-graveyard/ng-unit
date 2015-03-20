var expect = require('expect.js'),
    angular = require('angular-node');

var inject = angular.injector(['aModule']).invoke;

describe('aFactory', function () {
    'use strict';

    inject(function (aFactory) {
        describe('#aMethod', function () {
            var aMethod = aFactory.aMethod;

            it('should return "a" when called without arguments', function () {
                expect(aMethod()).to.be('a');
            });

            it('should return "a" when called with a single argument', function () {
                expect(aMethod(123)).to.be('a');
                expect(aMethod('abc')).to.be('a');
            });

            it('should return "a" when called with several arguments', function () {
                expect(aMethod(true, 123, 'abc')).to.be('a');
            });            
        });

        describe('#bMethod', function () {
            var bMethod = aFactory.bMethod;

            it('should return "b" when called without arguments', function () {
                expect(bMethod()).to.be('b');
            });

            it('should return "b" when called with a single argument', function () {
                expect(bMethod(123)).to.be('b');
                expect(bMethod('abc')).to.be('b');
            });            

            it('should return "b" when called with several arguments', function () {
                expect(bMethod(true, 123, 'abc')).to.be('b');
            });
        });
    });
});