/**
 * http://usejsdoc.org/
 */


//--------------------------------------------

//var person = {
//	name : 'Nag',
//	age : 32
//};
//

// to know property existence

// way-1

//if (person.name) {
//	console.log('name property exist...');
//}

// way-2

//var prop="name";
//
//if (prop in person) {
//	console.log('name property exist...');
//}

//--------------------------------------------

// JS obj constraints

//"use strict";
//
//var person = {
//	name : 'Nag',
//	age : 32
//};

//
//Object.defineProperty(person, 'name', {configurable:false,writable:false});
//Object.defineProperty(person, 'address', {value:'CHN',configurable:false,writable:false});


//delete person.name;
//person.name='';

//console.log(person.name);
//console.log(person.address);


//Object.preventExtensions(person);  // can't add new prop
//Object.seal(person);   // can't add/delete  prop
//Object.freeze(person);   // can't add/delete/modify prop



//--------------------------------------------


/*
 *   JS- object , can have 2 types of properties
 *   
 *   a. data properties
 *   b. accessor properties
 * 
 */

var person={
		_name:'Nag',  // data property
		set name(newName){ // accessor property
			console.log('setting new-name');
			if(!newName){
				this._name=newName;
			}
		},
		get name(){
			console.log('getting name');
			return this._name;
		}
};


// write
person.name='';

// read
console.log(person.name);



















