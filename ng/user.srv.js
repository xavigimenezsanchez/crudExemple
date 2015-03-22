angular.module('appLearn')
    .service('UserSvc', function($http) {
        var srv = this;
        srv.auth= false;
        srv.getUser = function() {
            return $http.get('/api/users');
        };
        srv.login = function (username, password,noLogin) {
            return $http.post('/api/sessions', {
                username: username,
                password: password
            }).success(function(data,status) {
                /*
                    Si l'autenticació és correcte li diem a l'angular que cada 
                    vegada que es comuniqui amb el servidor afegeixi el token 
                    al header 'x-auth'
                */
                $http.defaults.headers.common['x-auth'] = data;
                if (data) srv.auth = true;
            }).error(function(error,status){
                /*
                    Si l'usuari i contrasenya no és correcte executa la
                    función callback que li hem passat com paràmetre
                */
                noLogin(error, status);
            });
        };
        this.registre = function(username,password){
            /*
                Per registrar un usuari nou, només hem de fer un post
                a l'api d'usuaris
            */
            return $http.post('/api/users', {
                username: username,
                password: password
            });
        };
        this.logOut = function() {
            /*
                Quan l'usuari fa logout s'esborra el token
                i posem la propietat del servei "auth" a false
            */
            srv.auth = false;
            $http.defaults.headers.common['x-auth'] ="";
        };
    });