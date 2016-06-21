/**
 * http://usejsdoc.org/
 */

var http = require('http');
var fs = require("fs");

var httpServer = http.createServer(function(req, res) {

	// console.log('req received...');
	// res.writeHead(200, {
	// 'Content-Type' : "text/html"
	// });
	// res.write("Hello , Welcome to NodeWorld");
	// res.end();

	console.log(req.url);

	if (req.url === "/Johny.mp4") {

		// fs.readFile('Johny.mp4', function(err, data) {
		// if (err) {
		// res.end('failed to load');
		// }
		// res.writeHead(200, {
		// 'Content-Type' : "video/mp4"
		// });
		// res.write(data);
		// res.end();
		// });

		res.writeHead(200, {
			'Content-Type' : "video/mp4"
		});
		var rs = fs.createReadStream('Johny.mp4');
		//		rs.on('data', function(chunk) {
		//			console.log(chunk.length);
		//			res.write(chunk);
		//		});
		//		rs.on('end', function() {
		//			res.end();
		//		});
		
		rs.pipe(res);

	}

});

httpServer.listen(3000, function() {
	console.log('server listening on http://localhost:3000');
});
