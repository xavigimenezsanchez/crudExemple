angular.module('appLearn')
    .controller("RegistreController", function($scope,$location,UserSvc) {
        
        $scope.registre = function(username,password,password2) {
            
            $scope.$watchGroup(['username','password','password2'],function(newVal, oldVal) {
                if (newVal!=oldVal)
                    $scope.error=null;
                
            });
            if (!password || !password2 || !username){
                $scope.error = "Has d'emplenar tots els camps";
                
            }else if (password === password2){
                UserSvc.registre(username,password)
                    .success(function(user) {
                        $location.path('/login');
                    })
                    .error(function(error,status){
                        if (status == 409)
                            $scope.error = error.missatge;
                    });
            } else {
                $scope.error = "Les contrasenyes no són iguals";
            }
        };
    });
    