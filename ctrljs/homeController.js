mainApp.controller('homeController', ['$scope', 'DataService', '$cookieStore', '$location',
	function($scope, DataService, $cookieStore, $location) {
	$scope.role = $cookieStore.get('role');
	$scope.globals = $cookieStore.get('globals');
	$scope.username = $scope.globals.currentUser.username;
	$scope.isAdmin = false;
	$scope.init = function() {
		$scope.isAdmin = DataService.isAdmin();
	};
}]);