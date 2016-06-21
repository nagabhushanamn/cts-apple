/**
 * http://usejsdoc.org/
 */

$(function() {

	// load data from sever-side ( Model )

	// View Model
	function VM(name) {
		this.name = ko.observable(name)
		this.getName = function() {
			console.log('getting name....');
			this.name('Nagabhushanam');
		},
		this.resetName=function(){
			this.name('');
		}
	}

	var vm = new VM('Nag');

	ko.applyBindings(vm, $('#box1').get(0));

});