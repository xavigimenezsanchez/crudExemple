angular.module('appLearn')
    .service('UserSvc', function($http) {
        var svc = this;
        svc.auth= false;
        svc.getUser = function() {
            return $http.get('/api/users');
        };
        svc.login = function (username, password,noLogin) {
            return $http.post('/api/sessions', {
                username: username,
                password: password
            }).success(function(data,status) {
                svc.token = data;
                $http.defaults.headers.common['x-auth'] = data;
                if (data) svc.auth = true;
            }).error(function(error,status){
                noLogin(error, status);
            });
        };
        svc.registre = function(username,password){
            return $http.post('/api/users', {
                username: username,
                password: password
            });
        };
        svc.logOut = function() {
            svc.auth = false;
            $http.defaults.headers.common['x-auth'] ="";
        };
    });