/**
 * http://usejsdoc.org/
 */

(function() {

	var storeMod = angular.module('store', []);


	//---------------------------------------------------------
		
	// Service
	storeMod.factory('storeService', function($http, $q) {
		var url = "http://localhost:3000/api/products";
		var service = {
			loadAll : function() {
				var defer = $q.defer();
				var promise = $http.get(url);
				promise.then(function(resp) {
					defer.resolve(resp.data);
				}, function(reason) {
					defer.reject(reason);
				});
				return defer.promise;
			}
		};
		return service;
	});
	
	
	//---------------------------------------------------------
	
	// Controller - component
	storeMod.controller('StoreController', function($scope,storeService) {
		var promise=storeService.loadAll();
		promise.then(function(items) {
			$scope.products=items;
		}, function(reason) {
			$scope.message=reason;
		});
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
