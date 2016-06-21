/**
 * http://usejsdoc.org/
 */

/*
 *  JS - func closures
 *  ------------------
 *  
 *  	A closure is a function having access to the parent scope, 
 *      even after the parent function has closed.
 * 
 * 
 *      why we need ? use ?
 *      
 *      --> to abstract any behva from JS modules.
 *      --> after event-handling , when executing func asynch ,
 *          to access parent-scoped data.
 */

function tng() {

	console.log('tng......');
	var notes = 'JS NOTES';

	function learn() {
		console.log(this.name + ' learning with ' + notes);
	}

	console.log('tng finished...');

	return learn;
}

var learnFunc = tng();

//
var emp1 = {
	name : 'A'
};
var emp2 = {
	name : 'B'
};

learnFunc.call(emp1);
learnFunc.call(emp2);
