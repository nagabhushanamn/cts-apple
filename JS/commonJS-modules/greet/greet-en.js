/**
 * http://usejsdoc.org/
 */

var messages=require('./messages.json');

function greet() {
	console.log(messages.greet['en-message']);
}
module.exports = greet;