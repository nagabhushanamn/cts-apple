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