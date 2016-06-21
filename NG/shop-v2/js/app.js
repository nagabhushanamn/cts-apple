/**
 * http://usejsdoc.org/
 */

(function() {

	var storeMod = angular.module('store', []);

	// -------------------------------------

	// Model ( usually loaded from server-side )
	var items = [ {
		name : 'Laptop',
		price : 198000,
		desc : 'New Model',
		canBuy : true,
		notAvailable : false,
		make : Date.now(),
		images:[
		        {thumb:'images/Laptop.png',full:''},
		        {thumb:'images/Laptop.png',full:''}
		        ]
	}, {
		name : 'Mobile',
		price : 19000,
		desc : 'New Model',
		canBuy : true,
		notAvailable : false,
		make : Date.now(),
		discount : 5000,
		images:[
		        {thumb:'images/Mobile.png',full:''},
		        {thumb:'images/Mobile.png',full:''}
		        ]
	} ];

	// ------------------------------------------

	// Controller - component
	storeMod.controller('StoreController', function($scope,$filter) {
		//$scope.products = items;
		$scope.products=$filter('orderBy')(items,'price',true);
		console.log($filter('uppercase')('nag'));
		console.log($filter('priceDiscount')(1000,100));
		
	});

	// ------------------------------------------
	// Filter - component

	storeMod.filter('priceDiscount', function() {
		return function(originalPrice, discount,val1,val2) {
			if (angular.isNumber(originalPrice)) {
				if (discount) {
					return originalPrice - discount;
				} else {
					return originalPrice - 1;
				}
			} else {
				// throw Error	 ( in future , w'll learn how to handle errors in NG
			}
		};
	});

	// ------------------------------------------

})();
