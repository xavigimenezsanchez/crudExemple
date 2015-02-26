angular.module('appLearn')
    .controller('NouMissatgeController',function($scope,$location,MissatgesService) {
        $scope.afegirMissatge = function(patata) {
            console.log($scope.missatgeBody);
            if ($scope.missatgeBody){
                MissatgesService.create({
                    body:$scope.missatgeBody
                }).success(function() {
                    $location.path('/');
                });
            }
        };
    });