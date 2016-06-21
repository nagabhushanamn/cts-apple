/**
 * http://usejsdoc.org/
 */

(function() {

	var app = angular.module('todo', []);

	app.controller('TodoController', function($scope) {
		$scope.todos = [];
		$scope.todoTitle = '';
		$scope.addTodo = function() {
			if (!$scope.todoTitle) {
				return;
			}
			var todo = {
				title : $scope.todoTitle,
				completed : false
			};
			$scope.todos.push(todo);
			$scope.todoTitle = '';
		};
		$scope.removeTodo = function(index) {
			$scope.todos.splice(index, 1);
		};
	});

})();