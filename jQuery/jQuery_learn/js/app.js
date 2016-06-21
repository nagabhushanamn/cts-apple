/**
 * http://usejsdoc.org/
 */

/*
 * syntax to use jQuery 
 * 
 * $(selection,[context]).action1().action2();
 * 
 * 
 */

// $(window).load(function() {
// console.log('window load');
// });
// $(document).ready(function() {
// console.log('DOM Ready...');
// });

// short-hand
// $(function(){
// console.log('DOM Ready...');
// });

// ------------------------------------

// No conflict mode
// way-1
// var jq=jQuery.noConflict();
//
// jq(document).ready(function() {
// console.log('DOM ready..');
// jq('h2').hide();
// });

// way-2
// (function($){
//	
//	
// })(jQuery);

// -------------------------------------


var $box1=$('#box1');
$box1.colorify();


var $box2=$('#box2');
$box2.colorify({color:'red'});


