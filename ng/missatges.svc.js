angular.module('appLearn')
    .service("MissatgesService", function($http) {
        this.fetch = function() {
            return $http.get("/api/missatges");
        };
        this.create = function(missatge) {
            return $http.post("/api/missatges", missatge);
        };
        this.delete = function(id) {
            console.log(id);
            return $http.delete("/api/missatges/"+id);
        };
    });
