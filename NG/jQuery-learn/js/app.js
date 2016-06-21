/**
 * http://usejsdoc.org/
 */

// document.addEventListener('DOMContentLoaded', function(event) {
//
// console.log('DOM ready..');
//
// // using DOM API
// var box = document.querySelector('.jumbotron');
// var hideBtn = document.querySelector('.btn-danger');
// var showBtn = document.querySelector('.btn-success');
//
// hideBtn.addEventListener('click', function(event) {
// // console.dir(event);
// box.style.display = 'none';
// });
// showBtn.addEventListener('click', function(event) {
// // console.dir(event);
// box.style.display = 'block';
// });
//
// });
// -------------------------------------------------------
// using jQuery
/*
 * syntax ------
 * 
 * $('selector').action1().action2() --> jqObj/jqColln with DOM element(s)
 * 
 */

$(document).ready(function() {

	var $box = $('.jumbotron');
	var $hideBtn = $('.btn-danger');
	var $showBtn = $('.btn-success');

	$hideBtn.on('click', function(jqEvent) {
		$box.hide();
	});
	$showBtn.on('click', function(jqEvent) {
		$box.show();
	});

	// --------------------------------------

	var name = null;
	
	var $uname = $('#uname');
	$uname.on('keyup', function(e) {
		name = $uname.val();
		doBinding();
	});
	
	$('#reset-btn').on('click',function(){
		name = null;
		doBinding();
	});
	
	$('#name-btn').on('click',function(){
		// load this data from server...
		name = 'Nagabhushanam';
		doBinding();
	});
	
	var $unameSpan = $('#unameSpan');
	function doBinding(){
		$uname.val(name)
		$unameSpan.text(name);
	}
	

});
