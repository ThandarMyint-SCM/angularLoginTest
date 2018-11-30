mainApp.factory('ShareService', function($http) {
	var isAuthenticated = false;
	return {
        auth: function(username, password) {
        	$http.get("./json/user.json").then(function(data) {
		        angular.forEach(data, function (value, key) {
					if (value.name === username && value.password === password) {
						console.log("forEach");
						isAuthenticated = true;
					}
				});
		    });
            return isAuthenticated;
        }
    };
});