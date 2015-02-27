angular.module('appLearn')
    .controller("ApplicationController", function($scope,$location,UserSvc) {
        $scope.$on('login', function(e,user) {
            $scope.currentUser = user;
        });
        $scope.logout = function(){
            UserSvc.logOut();
            delete $scope.currentUser;
            $location.path('/');
        };
    });