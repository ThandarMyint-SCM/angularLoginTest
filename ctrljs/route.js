mainApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when('/login', {
		templateUrl: 'login.html',
		controller: 'loginController'
	})
	.when('/register', {
		templateUrl: 'register.html',
		// controller: 'loginController'
	})
	.when('/home', {
		templateUrl: 'home.html',
		controller: 'homeController'
	})
	.when('/studentList', {
		templateUrl: 'studentList.html',
		controller: 'studentListController',
	})
	.when('/studentMark', {
		templateUrl: 'studentMark.html',
		controller: 'studentMarkController'
	})
	.otherwise({
		redirectTo: '/login'
	});
}]);

mainApp.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);