/**
 * http://usejsdoc.org/
 */

var trainer = {
	doTeach : function() {

		console.log('teaching.....');
		var notes = 'JS Notes..'; // moved to Heap

		function learn(subNotes) {
			console.log('learning with ' + subNotes);
			throw new Error("hate JS");
		}

		setTimeout(function() {
			try {

				learn(notes);

			} catch (e) {
				console.log('i caught ' + e.message);
			}
		}, 5000);

		console.log('tng finished....');

	}
};

trainer.doTeach();
