angular.module('appLearn')
    .config(function($routeProvider, $locationProvider) {
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
            })
            .otherwise({
                redirectTo: '/'
            });
            
            $locationProvider.html5Mode({
                          enabled: true,
                          requireBase: false
                        });
    })
    .run(function($rootScope,UserSvc) {
        /*
            Cada vegada que canviem de pàgina se dispara el
            event $routeChangeStart,
            Si la pàgina que volem veure té la propietat 
            "autoritzat": a true i no ho està llavors no 
            farà el canvi
        */
        $rootScope.$on('$routeChangeStart', function(event, next) {
           if (next)
                if (!UserSvc.auth & next.autoritzat) 
                    event.preventDefault();
        });
    });