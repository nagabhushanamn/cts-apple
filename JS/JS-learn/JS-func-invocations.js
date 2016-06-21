/**
 * http://usejsdoc.org/
 */

/*
 * how to invoke JS functions ? 'this' keyword !!!
 * 
 */

// why we need 'this' keyword ?

//var person = {
//	name : 'Nag',
//	sayName : function() {
//		console.log('im ' + this.name);
//	}
//};
//
//var p=person;
//person={name:'Abc'};
//
//p.sayName();


//--------------------------------------

//global.name='GLOBAL';

function sayNameForAll(){
	//console.log(global);
	console.log('im '+this.name);
}

//var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
//var p2={name:'Kishore',sayName:function(){console.log('im '+this.name);}};

var p1={name:'Nag',sayName:sayNameForAll};
var p2={name:'Kishore',sayName:sayNameForAll};

//sayNameForAll(); // im GLOBAL    : function invocation ( this --> global )
//p1.sayName();    // im Nag       : method invocation   ( this --> invoker-obj )
//p2.sayName();    // im Kishore



//--------------------------------------

// call or apply and bind invocation

var p1={name:'Nag'};
var p2={name:'Kishore'};
//
var greet = {
	sayName : function(message,from) {
		console.log(message+' im ' + this.name+"-"+from);
	}
};

// dynamic method-binding

// 1. Eager invocation

//greet.sayName.call(p1,'Hello',"CHN");
//greet.sayName.call(p2,"Hi","DELHI");

// or

//greet.sayName.apply(p1,['Hello',"CHN"]);
//greet.sayName.apply(p2,["Hi","DELHI"]);


//2. Lazy invocation

//var newF=greet.sayName.bind(p1,'Hello',"CHN");
//newF();


//--------------------------------------


//function Person(name,age){
//	this.name=name;
//	this.age=age;
//	this.sayName=function(){
//		console.log('im '+this.name);
//	};
//}
//
//var p1=new Person('Nag',32);  // constructor invocation ( this --> new-obj )
//p1.sayName();
//
////---------------------------------------
//
////Ques
//
//Person('Abc',100);  // never invoke without 'new' keyword , bcoz its constructor
//sayName();


//-----------------------------------------


// Es6

//class Person{
//	constrcutor(name,age){
//		this.name=name;
//		this.age=age;
//	}
//	sayName(){
//		console.log('im '+this.name);
//	}
//}












