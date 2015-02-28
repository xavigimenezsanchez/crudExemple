angular.module('appLearn')
    .controller('MissatgesController',function($scope,$route,$location,MissatgesService) {
        //$scope.missatgeBody="holaaaa";
        MissatgesService.fetch()
        .success(function(missatges){
            $scope.missatges = missatges;
        });

      
        $scope.esborrarMissatge = function(missatge) {
            MissatgesService.delete(missatge._id).success(function() {
                   // $location.path('/');
                   $route.reload();
                    console.log('hola');
                });
        };
        $scope.editarMissatge = function(missatge) {
            MissatgesService.edit(missatge);
            $location.path('/editarmissatge');
        };
    });