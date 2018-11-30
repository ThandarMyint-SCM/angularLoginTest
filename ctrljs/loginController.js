mainApp.controller('loginController', function($scope, $location, $http, LoginService, $cookies) {
	$scope.users = "";
	$scope.login = function() {
		var inputData = $scope.userData;
		var username =  inputData.userName;
		var password = inputData.password;
		LoginService.getData(function(data) {
            $scope.users = data;
            angular.forEach($scope.users, function (value, key) {
				if (value.name === username && value.password === password) {
                    $cookies["username"] = username;
                    $cookies["password"] = password;
					$location.path('/home');
				}
			});
        });
	};
});

mainApp.factory('LoginService', function($http) {
	return {
        getData: function(done) {
            $http.get('./json/user.json')
            .success(function(data) { 
                done(data);
            })
            .error(function(error) {
                alert('An error occured');
            });
        }
    };
});