angular.module('appLearn')
    .service('UserSvc', function($http) {
        this.auth= false;
        this.getUser = function() {
            return $http.get('/api/users');
        };
        this.login = function (username, password,noLogin) {
            return $http.post('/api/sessions', {
                username: username,
                password: password
            }).success(function(data,status) {
                svc.token = data;
                $http.defaults.headers.common['x-auth'] = data;
                if (data) svc.auth = true;
            }).error(function(error,status){
                noLogin(error, status);  //s'executa el callback
            });
        };
        this.registre = function(username,password){
            return $http.post('/api/users', {
                username: username,
                password: password
            });
        };
        this.logOut = function() {
            svc.auth = false;
            $http.defaults.headers.common['x-auth'] ="";
        };
    });