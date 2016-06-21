/**
 * http://usejsdoc.org/
 */

// ES-5
var nums = [ 1, 3, 2 ];

//nums.sort(function(a, b) {
//	return a - b;
//});
//console.log(nums);



//var evenNums = nums.map(function(elt, i) {
//	return elt * 2;
//});
//console.log(evenNums);


//--------------------

//function Person(name,age){
//	
//	this.name=name;
//	this.age=age;
//	var that=this;
//	setInterval(function() {
//		that.age++;
//		console.log(that.name+" --> "+that.age);
//	}, 1000);
//	
//}
//
//var p1=new Person('child',0);

//---------------------------------

// ES-6

//nums.sort((a,b)=>{return a - b;});
//console.log(nums);

/*
 * 
 *  Unlike functions, 
 *  arrows share the same lexical this as their surrounding code.
 */

function Person(name,age){
	
	this.name=name;
	this.age=age;
	var that=this;
	setInterval(()=> {
		this.age++;
		console.log(this.name+" --> "+this.age);
	}, 1000);
	
}

var p1=new Person('child',0);




