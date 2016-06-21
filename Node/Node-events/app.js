/**
 * http://usejsdoc.org/
 */

var door = require('./door/door');
require('./light/light');

setTimeout(function() {
	door.open();

	setTimeout(function() {
		door.close();
	}, 5000);

}, 5000);