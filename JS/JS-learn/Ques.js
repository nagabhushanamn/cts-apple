/**
 * http://usejsdoc.org/
 */

// function sayHello(){
// console.log('hello...');
// }
// var sayHello=new Function('...');

function sayHello(message) {
	if (arguments.length === 0) {
		console.log('hello...');
		return;
	}
	console.log("msg :" + message);
}
//var sayHello = new Function('...');

sayHello("ola");
