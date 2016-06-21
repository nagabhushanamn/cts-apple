'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description # MainCtrl Controller of the todoApp
 */

angular.module('todoApp').controller('MainCtrl', function($scope,Todo,$filter,$routeParams,$location) {

	$scope.status=$routeParams.status||'all';
	
	var todos=[];
	Todo.query().$promise.then(function(items){
		todos=items;
		$scope.todos = $filter('todoFilter')(todos,$scope.status);
		$scope.todosLeft=$filter('todoFilter')(todos,'active').length;
	},function(reason){
		console.log('need login..');
		$location.path('login');
	});
	

	$scope.title = '';

	$scope.addTodo = function() {
		if ($scope.title) {
			var newTodo = {
				title : $scope.title,
				completed : false
			};
			Todo.save(newTodo, function(todo) {
				$scope.todos.push(todo);
				filterService.getFilteredTodos();
				$scope.title = '';
			});
		}
	};
	$scope.removeTodo = function(id) {
		Todo.remove({
			id : id
		}, function(resp) {
			var todos = $scope.todos;
			todos.splice(todos.indexOf(_.findWhere(todos, {
				id : id
			})), 1);
		});
	};

	$scope.update = function(todo) {
		console.log('updating....');
		console.dir(todo);
		Todo.update(todo, function() {
			$scope.message = 'todo updated...';
		});
	};
	
	$scope.toggleCompleted=function(todo){
		Todo.update(todo, function() {
			$scope.message = 'todo updated...';
		});
	};

});
