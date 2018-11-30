mainApp.controller('studentListController', function($scope, $cookies) {
	$scope.user = $cookies.username;
});