'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description # MainCtrl Controller of the todoApp
 */

angular.module('todoApp').factory('Todo', function($resource) {
	var url = "http://localhost:3000/api/todos/:id";
	var Todo = $resource(url, {
		id : '@id'
	}, {
		'update' : {
			method : 'PUT'
		}
	});
	return Todo;
});
