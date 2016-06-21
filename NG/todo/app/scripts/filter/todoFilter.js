/**
 * http://usejsdoc.org/
 */

angular.module('todoApp').filter('todoFilter', function() {

	return function(todos,status){
		
		var filterService = {
				getFilteredTodos : function(by) {
					if (status === 'active') {
						return this.getActiveTodos();
					}
					if (status === 'completed') {
						return this.getCompletedTodos();
					}
					return todos;
				},
				getActiveTodos : function() {
					return todos.filter(function(todo) {
						return !todo.completed;
					});
				},
				getCompletedTodos : function() {
					return todos.filter(function(todo) {
						return todo.completed;
					});
				},
			};

			return filterService.getFilteredTodos(status);

		
	};
	
});
