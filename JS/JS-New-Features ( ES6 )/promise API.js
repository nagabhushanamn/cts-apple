/**
 * http://usejsdoc.org/
 */

// module-1 : e.g hotel
var hotel = {
	getFood : function() {
		// prepare..
		var promise = new Promise(function(resolve, reject) {

			setTimeout(function() {
				//resolve('BIRYANI....');
				reject('SORRY....');
			}, 5000);

		});
		return promise;
	}
};

// module-2 : e.g trainer

var trainer = {
	doTeach : function() {
		console.log('teaching....');
		console.log('feels hungry..requesting food');
		var promise = hotel.getFood();
		console.log('got promise from hotel...');
		promise.then(function(food) {
			console.log('yummy...' + food);
		}, function(reason) {
			console.log('oops...' + reason);
		});
		console.log('teaching....again');
		console.log('teaching....finished..');
	}
};

trainer.doTeach();
