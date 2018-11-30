mainApp.controller('homeController', function($scope, $cookies) {
	$scope.user = $cookies.username;
});