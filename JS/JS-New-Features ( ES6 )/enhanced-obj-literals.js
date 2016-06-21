/**
 * http://usejsdoc.org/
 */

// ES-5

//var person={
//		name:'Nag',
//		sayName:function(){
//			console.log('im '+this.name);
//		}
//};


//ES-6

function work(){
	console.log('working...');
}

var v=100;

var person={
		name:'Nag',
		work,  // work:work
		sayName(){
			console.log('im '+this.name);
		},
		['prop'+(v+10)]:'something' // prop110:'something'
		
};
person.sayName();
person.work();
console.log(person['prop'+(v+10)]);


