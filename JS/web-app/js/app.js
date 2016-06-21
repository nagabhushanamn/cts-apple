/**
 * http://usejsdoc.org/
 */

document.addEventListener('DOMContentLoaded', function(event) {

	console.log('DOM ready..');

	// using DOM API
	var box = document.querySelector('.jumbotron');
	var hideBtn = document.querySelector('.btn-danger');
	var showBtn = document.querySelector('.btn-success');

	hideBtn.addEventListener('click', function(event) {
		// console.dir(event);
		box.style.display = 'none';
	});
	showBtn.addEventListener('click', function(event) {
		// console.dir(event);
		box.style.display = 'block';
	});

	// using DOM & XHR API
	var btn = document.querySelector('#btn1');
	var box1 = document.querySelector('#box1');
	btn.addEventListener('click', function(event) {

		var xhr = new XMLHttpRequest();
		xhr.open('GET', '/some.txt', true);
		xhr.send(null);

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				box1.innerHTML = xhr.responseText;
			}
		};

	});

});

window.onload = function() {
	console.log('window loaded....');
}
