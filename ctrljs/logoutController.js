mainApp.controller('logoutController', function($scope, $cookies, $location) {
	$cookies.remove("username");
	$location.path('/login');
});