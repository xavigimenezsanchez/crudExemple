angular.module('appLearn')
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                controller: 'MissatgesController',
                templateUrl: 'missatges.html',
                autoritzat: false
            })
            .when("/noumissatge", {
                controller: "NouMissatgeController",
                templateUrl: 'nouMissatge.html',
                autoritzat: true
            })
            .when("/editarmissatge", {
                controller: "EditarMissatgeController",
                templateUrl: 'editarMissatge.html',
                autoritzat: true
            })
            .when("/registre", {
                controller: "RegisterController",
                templateUrl: "register.html",
                autoritzat: false
            })
            .when("/login", {
                controller: "LoginController",
                templateUrl: "login.html",
                autoritzat: false
            })
            .when("/registre", {
                controller: "RegistreController",
                templateUrl: "registre.html",
                autoritzat: false
            });
    })
    .run(function($rootScope,UserSvc) {
        $rootScope.$on('$routeChangeStart', function(event, next) {
           if (next)
                if (!UserSvc.auth & next.autoritzat) 
                    event.preventDefault();
        });
    });