angular.module('appLearn')
    .service('UserSvc', function($http) {
        var svc = this;
        svc.auth= false;
        svc.getUser = function() {
            return $http.get('/api/users');
        };
        svc.login = function (username, password) {
            return $http.post('/api/sessions', {
                username: username,
                password: password
            }).then(function(val) {
                svc.token = val.data;
                $http.defaults.headers.common['x-auth'] = val.data;
                if (val.data) svc.auth = true;
                return svc.getUser();
            });
        };
        svc.registre = function(username,password){
            return $http.post('/api/users', {
                username: username,
                password: password
            }).then(function(val) {
                svc.token = val.data;
                $http.defaults.headers.common['x-auth'] = val.data;
                if (val.data) svc.auth = true;
                return svc.getUser();
            })
        };
        svc.logOut = function() {
            svc.auth = false;
            $http.defaults.headers.common['x-auth'] ="";
        };
    });