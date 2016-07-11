var app = angular.module('chatterApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		//timeline
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
		//login
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'authController'
		})
		//register
		.when('/register', {
			templateUrl: 'register.html',
			controller: 'authController'
		})
	 $locationProvider.html5Mode(true);
});

app.controller('mainController', function($scope) {
    $scope.posts = [];
    $scope.newPost = { createdBy: '', text: '', createdAt: '' };

    $scope.post = function() {
        $scope.newPost.createdAt = Date.now();
        $scope.posts.push($scope.newPost);
        $scope.newPost = { createdBy: '', text: '', createdAt: '' };
    };
});

app.controller('authController', function($scope) {
	$scope.user = {username: '', password: ''};
	$scope.errorMessage = '';

	$scope.login = function() {
		//not implemented
		$scope.errorMessage = 'login request for ' + $scope.user.username;
	};

	$scope.register = function() {
		//not implemented
		$scope.errorMessage = 'register request for ' + $scope.user.username;
	};
});