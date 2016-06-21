/**
 * http://usejsdoc.org/
 */

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.sayName = function() {
	console.log('im ' + this.name);
};
Person.prototype.sayAge = function() {
	console.log('im ' + this.age + " yrs old");
};

var p1 = new Person('A', 60);
var p2 = new Person('B', 80);

// -------------------------------

var p11 = Object.create(p1);

var p12 = {
	__proto__ : p1
};
