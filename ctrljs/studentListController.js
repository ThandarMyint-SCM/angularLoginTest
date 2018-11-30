mainApp.controller('studentListController', function($scope, $cookies, ShareService, $location) {
	$scope.user = $cookies.username;
	$scope.passwrord = $cookies.password;
	var isAuthenticated = false;
	$scope.init = function() {
		isAuthenticated = ShareService.auth($scope.user, $scope.password);
		alert(isAuthenticated);
		if (isAuthenticated === false) {
			$location.path('/login');
		}
		else {
			console.log("Success");
		}
	}
});