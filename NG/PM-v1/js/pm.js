/**
 * http://usejsdoc.org/
 */

(function() {

	var pmMod = angular.module('pm', [ 'ngRoute' ]);
	
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
		Product.loadAll().then(function(items) {
			$scope.products = items;
		});
		$scope.remove=function(id){
			Product.remove(id).then(function(){
				$route.reload();
			});
		};
	});
	pmMod.controller('AddNewController', function($scope, Product,$location) {
		$scope.product={};
		$scope.save=function(){
			Product.save($scope.product)
			.then(function(item){
				$scope.product={};
				console.log(item.name+" saved....");
				$location.path('view-all');
			});
		};
	});
	pmMod.controller('ViewAndUpdateController', function($scope, Product,$location,$routeParams) {
		
		if($routeParams.prodId){
			Product.loadById($routeParams.prodId)
			.then(function(item){
				$scope.product=item;
			});
		}
		
		$scope.save=function(){
			Product.update($scope.product)
			.then(function(item){
				$scope.product={};
				console.log(item.name+" saved....");
				$location.path('view-all');
			});
		};
	});
	
	//--------------------------------------------------------	

	pmMod.factory('Product', function($http, $q) {
		var url = "http://localhost:3000/api/products";
		var service = {
			loadAll : function() {
				var defer = $q.defer();
				$http.get(url).then(function(resp) {
					defer.resolve(resp.data);
				}, function(reason) {
					defer.reject(reason);
				});
				return defer.promise;
			},
			loadById : function(id) {
				var defer = $q.defer();
				$http.get(url+"/"+id).then(function(resp) {
					defer.resolve(resp.data);
				}, function(reason) {
					defer.reject(reason);
				});
				return defer.promise;
			},
			save : function(newProduct) {
				var defer = $q.defer();
				newProduct.make=Date.now();
				$http.post(url,newProduct).then(function(resp) {
					defer.resolve(resp.data);
				}, function(reason) {
					defer.reject(reason);
				});
				return defer.promise;
			},
			update : function(product) {
				var defer = $q.defer();
				$http.put(url,product).then(function(resp) {
					defer.resolve(resp.data);
				}, function(reason) {
					defer.reject(reason);
				});
				return defer.promise;
			},
			remove : function(id) {
				var defer = $q.defer();
				$http['delete'](url+"/"+id).then(function(resp) {
					defer.resolve(resp.data);
				}, function(reason) {
					defer.reject(reason);
				});
				return defer.promise;
			}
			
		};
		return service;
	});
	
	//--------------------------------------------------------	

})();