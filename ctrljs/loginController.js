mainApp.controller('loginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();
        $scope.login = function () {
            if ($scope.username && $scope.password) {
                AuthenticationService.Login($scope.username, $scope.password, function(response) {
                    if(response.success) {
                        AuthenticationService.SetCredentials($scope.username, $scope.password, response.role);
                        $location.path('/home');
                    } else {
                        $scope.error = response.message;
                    }
                });
            }
        };
    }]);