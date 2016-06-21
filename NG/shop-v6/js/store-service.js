/**
 * http://usejsdoc.org/
 */

(function() {

	var mod = angular.module('store-service', []);

	// Service
	mod.factory('productService', function($http, $q) {
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

})();