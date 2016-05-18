(function () {
    'use strict';

    describe('Angular Filter Test', function () {
        describe('MarkController', function() {
            beforeEach(module('exampleCustomFilterApp'));

            var $controller;

            beforeEach(inject(function(_$controller_) {
                $controller = _$controller_;
            }));

            it('vm.checkmarkVar is set to true', function() {
                var controller = $controller('MarkController');
                expect(controller.checkmarkVar).toBe(true);

            });
        });

        describe('CheckMark Filter', function() {
            var mock = jasmine.createSpyObj('mockMarkService', ['getChecknark', 'getXmark']);
            mock.getChecknark.and.returnValue('\u2713');
            mock.getXmark.and.returnValue('\u2718');

            beforeEach(module('exampleCustomFilterApp', function($provide) {
                $provide.value('MarkService', mock);
            }));

            var $filter;

            beforeEach(inject(function(_$filter_) {
                $filter = _$filter_;
            }));

            it('Filter check true', function() {
                var checkmarkFilter = $filter('checkmark');
                expect(checkmarkFilter(true)).toEqual('\u2713');
            });

            it('Filter check false', function() {
                var checkmarkFilter = $filter('checkmark');
                expect(checkmarkFilter(false)).toEqual('\u2718');
            });
        });
    });
})();
