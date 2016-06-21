/**
 * http://usejsdoc.org/
 */

// ES-5

// function Person(name,age){
// this.name=name;
// this.age=age;
// }
// Person.prototype.sayName=function(){
// console.log('im '+this.name);
// };

// ES-6

"use strict";

class Person{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	sayName(){
		console.log('im '+this.name);
	}
}

var p1=new Person('Nag');
p1.sayName();


class Employee extends Person{
	constructor(name,age,salary){
		super(name,age);
		this.salary=salary;
	}
	sayName(){
		super.sayName();
		console.log('Hey im '+this.name);
	}
	doWork(){
		console.log(this.name+" working.. "+this.salary)
	}
	a(){
		console.log('No arg...');
	}
	a(arg){
		console.log('One arg...');
	}
	static teach(){
		console.log('teaching...');
	}
}

var e=new Employee('Nag',32,10000);
e.sayName();
e.doWork();

e.a();

Employee.teach();


