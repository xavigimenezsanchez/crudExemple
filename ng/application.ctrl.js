angular.module('appLearn')
    .controller("ApplicationController", function($scope,$location,UserSvc) {
        $scope.$on('login', function(e,user) {
            /*
                Quan s'ha fet login s'emet l'event "login"
                i això fa que la variable de l'scope "currentUser"
                li diem quin usuari s'ha autenticant, d'aquesta manera
                fem que apareguin diferents opcions al menú
            */
            $scope.currentUser = user;
        });
        $scope.logout = function(){
            /*
                Quan fem logout esborrem el token i la variable
                de l'$scope "currentUser", d'aquesta forma desapareixen
                els menús sensibles a la autenticació
            */
            UserSvc.logOut();
            delete $scope.currentUser;
            $location.path('/');
        };
    });
    
    