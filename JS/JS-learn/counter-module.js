/**
 * http://usejsdoc.org/
 */


//--------------------------

//function init() {
//
//	var count = 0; // private
//
//	// public
//	return {
//		doCount : function() {
//			count++;
//		},
//		getCount : function() {
//			return count;
//		}
//	};
//
//}
//var counter = init();

// ----------------------------

//	pattern :  IIFE ( Immediatly Invokable Func Expression ) or Self Executable func

var counter=(function(){
	
	var count = 0; // private
	
		// public
		return {
			doCount : function() {
				count++;
			},
			getCount : function() {
				return count;
			}
		};
	
	
})();

//------------------------------

doCount();
doCount();
doCount();

// count = 0; // un-expected init..

console.log(counter.getCount());
