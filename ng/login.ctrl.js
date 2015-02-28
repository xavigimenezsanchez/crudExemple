angular.module('appLearn')
    .controller("LoginController", function($scope,$location,UserSvc) {
        $scope.login = function(username,password) {
            $scope.$watchGroup(['username','password'],function(newVal, oldVal) {
                if (newVal!=oldVal)
                    $scope.error=null;
                
            });
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
                            console.log(user);
                            $scope.$emit('login', user.data);
                            $location.path('/');
                        });
                    });
                
                
                
                    /*.then(function(info) {
                                                console.log(info);
                        if (info.status == 401) {
                                $scope.error = info.error.missatge;
                        } else {
                            $scope.$emit('login', info.user.data);
                            $location.path('/');
                        }
                    });*/
            }
        };
    });