mainApp.controller('studentListController', function($scope, $location, DataService) {
	$scope.isAdmin = false;
	$scope.init = function() {
			getStudentList();
			$scope.isAdmin = DataService.isAdmin();
			if (!$scope.isAdmin) {
				alert("Can't go to StudentList page.")
				$location.path('/home');
			}
	};
	function getStudentList() {
		DataService.getData(function(data) {
            $scope.students = data;
        });
	}
});