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
//			console.log('im B');
//		}
//	};
//	
//	app.b = mod;
//	
//})();



// way-2

define('js/b', ['js/a'], function(a) {
	
	//a.doWork();
	
	var mod = {
		doWork : function() {
			console.log('im B');
		}
	};
	return mod;
});
