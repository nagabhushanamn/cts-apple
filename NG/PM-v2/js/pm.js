/**
 * http://usejsdoc.org/
 */

(function() {

	var pmMod = angular.module('pm', [ 'ngRoute' ,'ngResource']);
	
	//--------------------------------------------------------	

	pmMod.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl : "templates/pm-home.html"
		}).when('/view-all', {
			templateUrl : "templates/pm-grid.html",
			controller : "ViewAllController"
		}).when('/add-new', {
			templateUrl : "templates/pm-product-form.html",
			controller : "AddNewController"
		})
		.when('/edit-product/:prodId', {
			templateUrl : "templates/pm-product-form.html",
			controller : "ViewAndUpdateController"
		});
	});

	//--------------------------------------------------------	
	
	pmMod.controller('ViewAllController', function($scope,$route, Product) {
		Product.query(function(items){
			$scope.products=items;
		});
		$scope.remove=function(pid){
			Product.remove({id:pid},function(){
				$route.reload();
			});
		};
	});
	pmMod.controller('AddNewController', function($scope, Product,$location) {
		$scope.product={};
		$scope.save=function(){
			var product=new Product();
			product.make=Date.now();
			angular.extend(product, $scope.product);
			product.$save(function(){
				$location.path('view-all');
			});
		};
	});
	pmMod.controller('ViewAndUpdateController', function($scope, Product,$location,$routeParams) {
		
		if($routeParams.prodId){
			$scope.product=Product.get({id:$routeParams.prodId});
		}
		
		$scope.save=function(){
			Product.update($scope.product,function(){
				$location.path('view-all');
			});
		};
	});
	
	//--------------------------------------------------------	

	pmMod.factory('Product', function($resource) {
		var url = "http://localhost:3000/api/products/:id";
		var Product=$resource(url,{id:'@id'},{'update':{method:'PUT'}});
		return Product;
	});
	
	//--------------------------------------------------------	

})();