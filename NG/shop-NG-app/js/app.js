/**
 * http://usejsdoc.org/
 */


(function(){
	


	var mod = angular.module('shop', [ 'ui.router','ngSanitize','store' ]);

	mod.config(function($stateProvider, $urlRouterProvider,$sceProvider) {

		$sceProvider.enabled(false);
		
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state("home", {
			url : "/",
			templateUrl : "templates/shop.html"
		}).state("login", {
			url : "/login",
			templateUrl : "templates/Login.html",
			controller: 'LoginController'
		})
		.state("logout", {
			url : "/logout",
			controller: 'LogoutController'
		})
		.state("search", {
			url : "/search",
			templateUrl: "templates/search.html"
		});

	});
	
	mod.controller('NavController', function($scope,User) {
		$scope.loggedIn=function(){
			return User.isAuthenticated();
		};
		
		$scope.snippet =
             '<p style="color:blue">an html\n' +
             '<em onmouseover="alert(window);">click here</em>\n' +
             'snippet</p>';
	});
	
	mod.controller('LoginController', function($scope,$rootScope,$state,User) {
		$scope.loginForm={};
		$scope.login=function(){
			var user={email:$scope.loginForm.username,password:$scope.loginForm.password};
			User.login(user,function(resp){
				console.log('login success');
				$state.go('home');
			});
		};
	});	
	mod.controller('LogoutController', function($scope,$rootScope,$state,User) {	
			User.logout(function(resp){
				console.log('logout success');
				$state.go('home');
			});
	});
	
	
})();

