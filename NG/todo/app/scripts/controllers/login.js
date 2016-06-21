'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description # MainCtrl Controller of the todoApp
 */

angular.module('todoApp').controller('LoginCtrl', function($scope,User,$filter,$routeParams) {

	
	$scope.doLogin=function(){
		console.log('doing Login...');
	};

});
