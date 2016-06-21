/**
 * http://usejsdoc.org/
 */

function init() {

	var trainer = {
		name : 'Nag',
		doTeach : function() {

			console.log(this.name + " teaching JS.."); // Nag teaching JS

			var self = this;
			function learn() {
				console.log(this.name + ' learning JS from ' + self.name); // learning
			}

			var emp = {
				name : 'CTS'
			};

			// learn();
			learn.call(emp);

		}
	};

	trainer.doTeach();
}

init();
