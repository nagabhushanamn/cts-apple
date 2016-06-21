/**
 * http://usejsdoc.org/
 */

// thead-1
var fs = require('fs');

/*
 * -> open file ............... 
 * -> read file..................
 * 
 */

var data1 = fs.readFileSync('info.txt', 'utf8')
console.log(data1);

var data2 = fs.readFileSync('another.txt', 'utf8')
console.log(data2);
