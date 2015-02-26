angular.module('appLearn')
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                controller: 'MissatgesController',
                templateUrl: 'missatges.html'
            })
            .when("/noumissatge", {
                controller: "NouMissatgeController",
                templateUrl: 'nouMissatge.html'
            })
            .when("/registre", {
                controller: "RegisterController",
                templateUrl: "register.html"
            })
            .when("/login", {
                controller: "LoginController",
                templateUrl: "login.html"
            });
    });