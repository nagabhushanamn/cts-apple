/**
 * http://usejsdoc.org/
 */

/*
 * Unit Testing ==> AAA
 * 
 * Arrange Act Assert
 * 
 */

// test-case(s) ---> test-suite
describe('calc-ctrl suite', function() {

	var calcController;
	var scope;

	beforeEach(module('calc'));

	beforeEach(inject(function($controller) {
		scope = {};
		calcController = $controller('CalcController', {
			$scope : scope
		}); // ng-controller='CalcController'
	}));

	beforeEach(function() {
		scope.first = 1;
		scope.second = 2;
	});

	// 
	it('shud 1+2 to be equal to 3', function() {
		scope.doArith();
		expect(scope.latest).toBe(3);
	});
	it('shud 1-2 to be equal to -1', function() {
		scope.operator = '-';
		scope.doArith();
		expect(scope.latest).toBe(-1);
	});
	it('shud 1*2 to be equal to 2', function() {
		scope.operator = '*';
		scope.doArith();
		expect(scope.latest).toBe(2);
	});
	it('shud 1/2 to be equal to 0.5', function() {
		scope.operator = '/';
		scope.doArith();
		expect(scope.latest).toBe(0.5);
	});

});