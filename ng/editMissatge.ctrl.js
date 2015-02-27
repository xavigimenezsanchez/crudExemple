angular.module('appLearn')
    .controller('EditarMissatgeController',function($scope,$location,MissatgesService) {
        $scope.missatgeBody = MissatgesService.missatgeToEdit.body;
        $scope.editarMissatge = function() {
            if ($scope.missatgeBody){
                MissatgesService.put({
                    "_id":MissatgesService.missatgeToEdit._id,
                    "body":$scope.missatgeBody
                }).success(function() {
                    MissatgesService.missatgeToEdit.body = $scope.missatgeBody;
                    $scope.missatgeBody=null;
                    $location.path('/');
                });
            }
        };
    });