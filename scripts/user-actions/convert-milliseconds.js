'use strict';

console.log('--- loading: convert-milliseconds.js');
const millisecondsHandler = () => {

let milliseconds;
milliseconds = 604800000*weeks;
let message = `${weeks} week is equal to ${milliseconds} milliseconds`;
alert(message);
console.log(`weeks: ${weeks}, \ntypeof weeks: ${typeof(weeks)}`);
console.log(`milliseconds: 604800000*${weeks}`);
console.log(`milliseconds: ${milliseconds}, \ntypeof milliseconds: ${typeof(milliseconds)}`);
console.log(`message: ${message}`);
};
console.log('--- finished: convert-milliseconds.js');
