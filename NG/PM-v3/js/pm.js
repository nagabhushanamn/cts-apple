/**
 * http://usejsdoc.org/
 */

(function() {

	var pmMod = angular.module('pm', [ 'ui.router', 'ngResource' ]);

	// --------------------------------------------------------

	pmMod.config(function($stateProvider,$urlRouterProvider) {

		$urlRouterProvider.otherwise("/");
		
		$stateProvider
		.state('home',{url:"/",templateUrl: "templates/pm-home.html"})
		.state('all',{url:"/view-all",templateUrl: "templates/pm-grid.html",controller: 'ViewAllController'})
		.state('new',{url:"/add-new",templateUrl: "templates/pm-product-form.html",controller: 'AddNewController'})
		.state('all.edit', {
			url : "/edit-product/:prodId",
			controller : 'ViewAndUpdateController',
			views:{
				'read-view':{
					templateUrl : "templates/pm-product-view.html",
				},
				'edit-view':{
					templateUrl : "templates/pm-product-form.html",
				},
			},
		}).state('all.view', {
			url : "/view-product/:prodId",
			views:{
				'read-view':{
					templateUrl : "templates/pm-product-view.html",
					controller : 'ViewAndUpdateController'
				}
			}
		});
		
		
	});

	// --------------------------------------------------------

	pmMod.controller('ViewAllController', function($scope,$state,Product) {
		Product.query(function(items) {
			$scope.products = items;
		});
		$scope.remove = function(pid) {
			Product.remove({
				id : pid
			}, function() {
				 $state.reload();
			});
		};
	});
	pmMod.controller('AddNewController', function($scope, Product, $location) {
		$scope.product = {};
		$scope.save = function() {
			var product = new Product();
			product.make = Date.now();
			angular.extend(product, $scope.product);
			product.$save(function() {
				$location.path('view-all');
			});
		};
	});
	pmMod.controller('ViewAndUpdateController', function($scope, Product,$location,$stateParams) {

		 if($stateParams.prodId){
			 $scope.product=Product.get({id:$stateParams.prodId});
		 }

		$scope.save = function() {
			Product.update($scope.product, function() {
				$location.path('view-all');
			});
		};
	});

	// --------------------------------------------------------

	pmMod.factory('Product', function($resource) {
		var url = "http://localhost:3000/api/products/:id";
		var Product = $resource(url, {
			id : '@id'
		}, {
			'update' : {
				method : 'PUT'
			}
		});
		return Product;
	});

	// --------------------------------------------------------

})();