/**
 * http://usejsdoc.org/
 */

// ------------------------------------------
// Model
function Todo(title) {
	this.title = title;
	this.completed = false;
}
// -------------------------------------------
// Service comp

var todoService = {
	todos : [],
	addNewTodo : function(newTodo) {
		this.todos.push(newTodo);
	},
	removeTodo : function(index) {
		this.todos.splice(index, 1);
	}
};
// --------------------------------------------

// using DOM bind event-listeners

var listEle = document.getElementById('list');
var newTodoEle = document.getElementById('new-todo');

// Remove Todos
listEle.addEventListener('click', function(event) {
	todoService.removeTodo(event.target.dataset.index);
	render(todoService.todos);
	event.stopPropagation();
}, false);

newTodoEle.addEventListener('keyup', function(event) {

	if (event.which === 27) {
		this.value = '';
		return;
	}
	if (event.which === 13) {
		var title = this.value;
		if (title === "") {
			return;
		}
		var todo = new Todo(title);
		todoService.addNewTodo(todo);
		this.value = '';
		render(todoService.todos);
	}
});

// ----------------------------------------------

function render(todos) {

	while (listEle.hasChildNodes()) {
		listEle.removeChild(listEle.lastChild);
	}

	// listEle.innerHTML=''; // slow

	todos.forEach(function(todo, i) {

		var divItem = document.createElement('div');
		divItem.setAttribute('class', 'list-group-item');

		var checkEle = document.createElement('input');
		checkEle.setAttribute('type', 'checkbox');

		checkEle.addEventListener('click', function(e) {
			e.stopPropagation();
		});

		var spanEle = document.createElement('span');
		spanEle.innerHTML = todo.title;

		var removeEle = document.createElement('button');
		removeEle.innerHTML = "X";
		removeEle.setAttribute('data-index', i);
		removeEle.setAttribute('class', 'btn btn-sm btn-danger');

		// removeEle.addEventListener('click', function(e) {
		// todoService.removeTodo(this.dataset.index);
		// render(todoService.todos);
		// });

		divItem.appendChild(checkEle);
		divItem.appendChild(spanEle);
		divItem.appendChild(removeEle);

		listEle.appendChild(divItem);
	});

}

// ---------------------------------------------
render(todoService.todos);
