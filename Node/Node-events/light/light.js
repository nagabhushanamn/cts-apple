/**
 * http://usejsdoc.org/
 */

var door = require('../door/door');

function setup() {
	door.on('door-open', function(event) {
		console.log('LIGHT ON ' + event.doorNo + " \t" + event.floor);
	});
	door.on('door-close', function(event) {
		console.log('LIGHT OFF ' + event.doorNo + " \t" + event.floor);
	});
}

setup();