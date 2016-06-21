/**
 * http://usejsdoc.org/
 */

(function() {

	var storeMod = angular.module('store', []);

	// -------------------------------------

	// Model ( usually loaded from server-side )
	var item = {
		name : 'Laptop',
		price : 198000,
		desc : 'New Model'
	};

	// --------------------------------------

	// way-1: plain JS
	
	//	document.querySelector('h4').innerHTML = item.name;
	//	document.querySelector('h5').innerHTML = item.price;
	//	document.querySelector('p').innerHTML = item.desc;

	//------------------------------------------

	// way-2: using jQuery
	
	//	$(function(){
	//		$("h4").text(item.name);
	//		$("h5").text(item.price);
	//		$("p").text(item.desc);
	//	})
	
	//------------------------------------------
	
	// way-3 : using Angular
	
	// Controller - component
	
	storeMod.controller('StoreController', function() {
		//
		this.product=item;
	});
	
	
})();
