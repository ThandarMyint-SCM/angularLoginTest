mainApp.controller('studentMarkController', function($scope, $location, DataService) {
	$scope.init = function() {
		getStudentList();
		$scope.isAdmin = DataService.isAdmin();
	};
	function getStudentList() {
		DataService.getData(function(data) {
            $scope.studentMarks = data;
        });
	}
});