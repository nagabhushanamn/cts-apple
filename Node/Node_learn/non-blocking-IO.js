/**
 * http://usejsdoc.org/
 */

var fs = require('fs');

fs.open('info.txt', 'r', function(err, fd) {
	if (err) {
		return;
	}
	console.log('file opened....');

	fs.readFile(fd, function(err, data) {
		console.log('file red..');
		console.log(data.toString('utf8'));
	});

});

console.log('do something-else');