/**
 * http://usejsdoc.org/
 */

"use strict";

/*
 *  we can define/create func in 2-ways
 *  
 *  1. function declaration
 *  2. function expression
 * 
 */

//1. function declaration

//console.log(add(12,13));
//
//function add(n1,n2){
//	return n1+n2;
//}
//console.log(add.name);

//console.log(add(12,13));

//-------------------------------

//2. function expression

//console.log(add(12,13));
// 
//var add = function(n1, n2) {
//	return n1 + n2;
//};

//console.log(add(12,13));

//-------------------------------



// functional programming lang

// 1. functions as values
//-----------------------

//function sayHello(){
//	console.log('Hello...');
//}
//
//var sayHi=sayHello;
//sayHi();


//2. functions as args
//-----------------------

//function greet(fn){
//	if(fn){
//		fn();
//	}else{
//		console.log('Hello..');
//	}
//}

//greet();
//greet(function() {
//	console.log('ola');
//});

// e.g

//var nums=[1,3,5,7,9,2,4,6,8,10];
////nums.sort();
//nums.sort(function(a,b){return a-b;});
//
//console.log(nums);




//3. functions as return-value
//----------------------------
//
//function tng(){
//	console.log('tng....');
//	function learn(){
//		console.log('learn...');
//	}
//	//learn();
//	return learn;
//}

//var learnFunc=tng();
//
//learnFunc();
//learnFunc();


//-------------------------------


//function reflect(a,b){
//	console.dir(arguments);
//	return arguments[1];
//}
//
//console.log(reflect(12,13));


//e.g
//
//function sum(){
//	
//	var result=0,
//	    len=arguments.length,
//	    i=0;
//	
//	while(i<len){
//		result+=arguments[i];
//		i++;
//	}
//	
//	return result;
//}
//
//console.log(sum(1,2,3,4,5,6,7,8,9,10));




//-------------------------------

// Var-scope

/*
 *  1. Global scope
 *  2. function-scope 
 *  3. block-scope  ( from es6 )
 * 
 */
//
//
//function f() {
//	"use strict";
//
//	{
//		let v = 100;
//	}
//
//	// console.log(v);
//
//	function f1() {
//		console.log(v);
//	}
//
//	f1();
//
//}
//
//f();

//---------------------------------

// declaring variables without 'var' keyword , 
// yeilds making implicit globals

//
//function f(){
//	 var v=100;
//}
//
//f();

//console.log(v);











