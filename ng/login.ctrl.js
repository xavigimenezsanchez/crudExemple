angular.module('appLearn')
    .controller("LoginController", function($scope,$location,UserSvc) {
         $scope.$watchGroup(['username','password'],function(newVal, oldVal) {
                if (newVal!=oldVal)
                    $scope.error=null;
                
            });
        $scope.login = function(username,password) {
            if (!username || !password) {
                $scope.error = "Has d'emplenar tots els camps";
            } else{
                console.log(UserSvc);
                UserSvc.login(username,password,
                    function(error,status) {
                        if (status == 401) {
                                $scope.error = error.missatge;
                        }
                    }).success(function() {
                        
                        UserSvc.getUser().then(function(user){

                            $scope.$emit('login', user.data);
                            $location.path('/');
                        });
                    });
            }
        };
    });