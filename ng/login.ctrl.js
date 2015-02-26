angular.module('appLearn')
    .controller("LoginController", function($scope,$location,UserSvc) {
        $scope.login = function(username,password) {
            UserSvc.login(username,password)
                .then(function(user) {
                    $scope.$emit('login', user.data);
                    if (user.data) $location.path('/');
                });
        };
    });