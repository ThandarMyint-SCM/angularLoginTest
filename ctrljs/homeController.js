mainApp.controller('homeController', function($scope, $cookies) {
	$scope.user = $cookies.username;
	$scope.password = $cookies.password;
});