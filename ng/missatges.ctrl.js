angular.module('appLearn')
    .controller('MissatgesController',function($scope,$location,MissatgesService) {
        //$scope.missatgeBody="holaaaa";
        MissatgesService.fetch()
        .success(function(missatges){
            $scope.missatges = missatges;
        })
        .error(function(e){
            console.log(e);
        });

      
        $scope.esborrarMissatge = function(missatge) {
            MissatgesService.delete(missatge._id).success(function() {
                    $location.path('/');
                });
        };
        $scope.editarMissatge = function(missatge) {
            console.log(missatge);
            MissatgesService.edit(missatge);
            $location.path('/editarmissatge');
        };
    });