/**
 * http://usejsdoc.org/
 */

//var message = "hello";
//
//function greet() {
//	console.log('Hello..');
//}
//function sayName(){
//	console.log('im ??');
//}
//
//var m={
//		greet:greet,
//		sayName:sayName
//};

//module.exports.greet = greet;
//module.exports.sayName = sayName;

//module.exports=m;

//----------------------------------


var en=require('./greet-en');
var es=require('./greet-es');

function greet(lang){
	if(lang==='en'){
		en();
	}
	if(lang==='es'){
		es();
	}
}

module.exports=greet;








