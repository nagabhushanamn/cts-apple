/**
 * http://usejsdoc.org/
 */

(function() {

	var storeMod = angular.module('store', ['lbServices']);

	//---------------------------------------------------------
	
	// Controller - component
	storeMod.controller('StoreController', function($scope,Product) {
		Product.find(function(items){
			$scope.products=items;
		});
	});
		
	storeMod.controller('TabsController', function($scope,Product) {
		$scope.tab = 1; // ng-init="tab=1"
		$scope.changeTab = function(product,tabIndex) {
			if(tabIndex===3){
				Product.prototype$__get__reviews({id:product.id},function(reviews){
					product.reviews=reviews;
				});
			}
			$scope.tab = tabIndex;
		};
		$scope.removeReview=function(product,review){
			Product.prototype$__destroyById__reviews({id:product.id,fk:review.id},function(r){
				product.reviews.splice(product.reviews.indexOf(r),1);
			});
		};
		$scope.editReview=function(review){
			$scope.$broadcast('edit-review',review);
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
	storeMod.directive('productReviewForm', function(Product){
		return {
			restrict: "E",
			templateUrl: "templates/product-review-form.html",
			controller: function($scope) {
				$scope.newReview={};
				$scope.$on('edit-review',function(event,review){
					$scope.edit=true;
					$scope.newReview=review;
				});
				$scope.addNewReview=function(product){
					if($scope.edit){
						Product.prototype$__updateById__reviews({id:product.id,fk:$scope.newReview.id},$scope.newReview,function(){
							console.log('review updated...');
						});
					}else{
					Product.prototype$__create__reviews({id:product.id},$scope.newReview,function(review){
						product.reviews=product.reviews||[];
						product.reviews.push(review);
					});
					}
					$scope.newReview={};
				};
			}
		};
	});
	
	//---------------------------------------------

})();
