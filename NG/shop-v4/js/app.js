/**
 * http://usejsdoc.org/
 */

(function() {

	var storeMod = angular.module('store', []);

	// -------------------------------------

	// Model ( usually loaded from server-side )
	var items = [ {
		id:1344,
		name : 'Laptop',
		price : 198000,
		desc : 'New Model',
		canBuy : true,
		notAvailable : false,
		make : Date.now(),
		images : [ {thumb : 'images/Laptop.png',full : ''}, 
		           {thumb : 'images/Laptop.png',full : ''}
		         ],
		 reviews:[
		          {stars:5,comment:'good...',author:'nag@gmail.com'},
		          {stars:3,comment:'too costly...',author:'indu@gmail.com'}
		          ]        
	}, {
		id:3424,
		name : 'Mobile',
		price : 19000,
		desc : 'New Model',
		canBuy : true,
		notAvailable : false,
		make : Date.now(),
		discount : 5000,
		images :  [ {thumb : 'images/Laptop.png',full : ''}, 
			         {thumb : 'images/Laptop.png',full : ''}
                  ],
	     reviews:[
		          {stars:5,comment:'good...',author:'nag@gmail.com'},
		          {stars:3,comment:'too costly...',author:'indu@gmail.com'}
		          ]               
	} ];

	// ------------------------------------------

	// Controller - component
	storeMod.controller('StoreController', function($scope, $filter) {
		// $scope.products = items;
		$scope.products = $filter('orderBy')(items, 'price', true);
		console.log($filter('uppercase')('nag'));
		console.log($filter('priceDiscount')(1000, 100));

	});
	storeMod.controller('TabsController', function($scope) {
		$scope.tab = 1; // ng-init="tab=1"
		$scope.changeTab = function(tabIndex) {
			$scope.tab = tabIndex;
		};
		$scope.isTabSelected = function(tabIndex) {
			return $scope.tab === tabIndex;
		};
	});
	

	// ------------------------------------------
	// Filter - component

	storeMod.filter('priceDiscount', function() {
		return function(originalPrice, discount, val1, val2) {
			if (angular.isNumber(originalPrice)) {
				if (discount) {
					return originalPrice - discount;
				} else {
					return originalPrice - 1;
				}
			} else {
				// throw Error ( in future , w'll learn how to handle errors in
				// NG
			}
		};
	});

	// ------------------------------------------
	
	// Directives
	
	storeMod.directive('productTitle', function(){
		return {
			restrict: "E",
			replace:true,
			templateUrl: "templates/product-title.html",
			link:function(scope,iElement,iAttrs){
				iElement.on('mouseenter',function(){
					iElement.css('background-color',"#def");
				});
				iElement.on('mouseleave',function(){
					iElement.css('background-color',"#fff");
				});
			}
		};
	});
	storeMod.directive('productTabs', function(){
		return {
			restrict: "E",
			templateUrl: "templates/product-tabs.html",
			controller: "TabsController",
			controllerAs: "tc"
		};
	});
	storeMod.directive('productReviewForm', function(){
		return {
			restrict: "E",
			templateUrl: "templates/product-review-form.html",
			controller: function($scope) {
				$scope.newReview={author:'nag@gmail.com'};
				$scope.addNewReview=function(product){
					// send newReview form-data to server with product.id ( future work )
					product.reviews.push($scope.newReview); // saving review locally.
					$scope.newReview={author:'nag@gmail.com'};
				};
			}
		};
	});
	
	//---------------------------------------------

})();
