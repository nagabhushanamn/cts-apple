/**
 * http://usejsdoc.org/
 */

// console.log("Welcome to browser-world");
// var v = 12;
//
// function display() {
// console.log('displaying...');
// }
// --------------------------------

//var v = 12;
//
//function a() {
//	// var v=undefined;
//	console.log(v);
//	var v = 13;
//
//	function b() {
//		console.log(v);
//	}
//
//	b(); // // New Child Execution Context (b)
//}
//a(); // New Child Execution Context (a)
//
//function c() {
//	console.log(v);
//}

//c();

// --------------------------------



var trainerService={
		doTeach:function(){
			console.log(this.trName +" teaching JS");
		}
};

var trainer={
trName:'Nag'
};



//document.querySelector('.btn-primary')
//.addEventListener('click',trainer.doTeach);

//document.querySelector('.btn-primary')
//.addEventListener('click',function(){
//	trainer.doTeach();
//});

document.querySelector('.btn-primary')
.addEventListener('click',trainerService.doTeach.bind(trainer));





