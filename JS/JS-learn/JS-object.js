/**
 * http://usejsdoc.org/
 */

// Reference Types --> objects
/*
 * obj --> person { name:'Nag' age :32 }
 * 
 */

// 
/*
 * how to create JS-object ? 
 * var o=new ContructorFunction();
 * 
 */

// var person=new Object();
// person.name='Nag';
// person.age=32;
// person.doWork=function(){
// console.log('teaching JS...');
// };
// console.log(person.name);
// person.doWork();
// delete person.age;
//
// console.log(person.age);
// ----------------------------------
/*
 * some built-in types
 * 
 * a.Object b.Array c.RegExp d.Function
 * 
 */

// a. Object
// var person = new Object(); // empty obj-wrapper
// person.name = 'Nag';
// person.age = 32;
// person.doWork = function() {
// };

// literal style
// var newPerson = {
// name : 'Nag',
// age : 32,
// doWork : function() {
// }
// };
// delete newPerson.doWork;
// newPerson.doWork();

// ----------------------------------

// b. Array
//
// var colors=new Array();
// colors[0]='red';
// colors.push('green');
// colors.push('blue');

// literal style
// var newColors=["red","green","blue"];


// ----------------------------------


// c. RegExp
// var re=new RegExp("\\d{10}");
// console.log(re.test("9945674228"));
// literal style
//
// var newRe=/\d{10}/;
// console.log(newRe.test("9945674228"));


// ----------------------------------



// d. Function
/*
 * imp note:
 * 
 * all functions JS-lang are objects. then can have properties
 * 
 */

//var add = new Function("n1", "n2", "var result=n1+n2;return result;");
//console.log(add(12, 13));

// literal style

//function add(n1, n2) {
//	var result = n1 + n2;
//	return result;
//}
//
//add.prop1='abc';
//add.method=function(){
//	console.log('...');
//};
//

// add.method();

//----------------------------------



// How to define/access obj's properties ?

/*
 *  way-1 : using '.' notation
 *  way-2 : using '[]' notation
 * 
 */
//
//var person={
//		name:'Nag',
//		age:32,
//		'full-name':'Nag N'
//};
//
//console.log(person.name);
//console.log(person['name']);
//console.log(person['full-name']);

//
//person['my-address']='BLR';
//
//var prop='name';
//console.log(person[prop]);





