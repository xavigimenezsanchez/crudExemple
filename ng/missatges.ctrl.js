angular.module('appLearn')
    .controller('MissatgesController',function($scope,$location,MissatgesService) {
        MissatgesService.fetch()
        .success(function(missatges){
            $scope.missatges = missatges;
        });

      
        $scope.esborrarMissatge = function(missatge) {
            MissatgesService.delete(missatge._id).success(function() {
                   var pos = $scope.missatges.indexOf(missatge);
                   $scope.missatges.splice(pos,1);
                });
        };
        $scope.editarMissatge = function(missatge) {
            MissatgesService.edit(missatge);
            $location.path('/editarmissatge');
        };
    });