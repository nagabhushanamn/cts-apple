/**
 * http://usejsdoc.org/
 */
// var mod = {
// doWork : function() {
// console.log('im A');
// }
// };

// way-1

//(function() {
//
//	var mod = {
//		doWork : function() {
//			console.log('im C');
//		}
//	};
//
//	app.c = mod;
//
//})();



// way-2

define('js/c', [], function() {
	var mod = {
		doWork : function() {
			console.log('im C');
		}
	};
	return mod;
});
