/**
 * http://usejsdoc.org/
 */

var messages=require('./messages.json');

function greet() {
	console.log(messages.greet['es-message']);
}
module.exports = greet;