/**
 * http://usejsdoc.org/
 */

"use strict";

var EventEmitter=require('events').EventEmitter;

class Door extends EventEmitter{
	constructor(){
		super();
		console.log('door instance created...');
	}
	open(){
		console.log('door opened...');
		this.emit('door-open',{doorNo:2,floor:1});
	}
	close(){
		console.log('door closed');
		this.emit('door-close',{doorNo:2,floor:1});
	}
}

var door=new Door();

module.exports=door;
