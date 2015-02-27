angular.module('appLearn')
    .controller("RegistreController", function($scope,$location,UserSvc) {
        $scope.registre = function(username,password) {
            UserSvc.login(username,password)
                .then(function(user) {
                    $scope.$emit('login', user.data);
                    if (user.data) $location.path('/');
                });
        };
    });
    