(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * http://usejsdoc.org/
 */


//var greetMod=require('./greet');
//greetMod.greet();
//greetMod.sayName();

//
//var greet=require('./greet');
//greet('es');


var User=require('./greet/User');
var user=new User('Nag');
user.sayName();


var User=require('./greet/User');
var user2=new User('Ria');
user2.sayName();

},{"./greet/User":2}],2:[function(require,module,exports){
/**
 * http://usejsdoc.org/
 */

"use strict";

//var person = {
//	name : 'Nag',
//	sayName : function() {
//		console.log('im ' + this.name);
//	}
//};
//
//module.exports = person;


class User{
	constructor(name){
		this.name=name;
	}
	sayName(){
		console.log('im '+this.name);
	}
}

module.exports=User;
},{}]},{},[1]);
