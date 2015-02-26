angular.module('appLearn')
    .controller("ApplicationController", function($scope,$location) {
        $scope.$on('login', function(e,user) {
            $scope.currentUser = user;
        });
        $scope.logout = function(){
            delete $scope.currentUser;
            $location.path('/');
        };
    });