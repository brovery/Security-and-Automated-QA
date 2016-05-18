describe('calculator', function () {

    beforeEach(module('calcApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('sum', function () {
        it('1 + 1 should equal 2', function () {
            var $scope = {};
            var controller = $controller('calcController', { $scope: $scope });
            $scope.x = 1;
            $scope.y = 2;
            $scope.sum();
            expect($scope.z).toBe(3);
        });
        it('z should have default value of zero', function() {
            var $scope = {};
            var controller = $controller('calcController', { $scope: $scope });
            expect($scope.z).toBe(0);
        });
    });

});