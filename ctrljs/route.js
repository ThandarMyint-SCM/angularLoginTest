mainApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when('/login', {
		templateUrl: 'login.html',
		controller: 'loginController'
	})
	.when('/home', {
		templateUrl: 'home.html',
		controller: 'homeController'
	})
	.when('/studentList', {
		templateUrl: 'studentList.html',
		controller: 'studentListController'
	})
	.when('/studentMark', {
		templateUrl: 'studentMark.html',
		controller: 'studentMarkController'
	})
	.when('/logout', {
		controller: 'logoutController'
	})
	.otherwise({
		redirectTo: '/login'
	});
}]);