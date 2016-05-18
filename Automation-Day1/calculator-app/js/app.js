angular.module('calcApp', []).controller('calcController', function($scope) {
    // var cc = this;
    $scope.z = 0;
    $scope.sum = sum;
    
    
    function sum() {
        $scope.z = $scope.x + $scope.y;
    }
});