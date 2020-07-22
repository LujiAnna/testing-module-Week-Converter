'use strict';

console.log('--- loading: convert-seconds.js');
const secondsHandler = () => {

    let seconds;
    seconds = 604800 * weeks;
    let message = `${weeks} week is equal to ${seconds} seconds`;
    alert(message);
    console.log(`weeks: ${weeks}, \ntypeof weeks: ${typeof(weeks)}`);
    console.log(`seconds: 604800*${weeks}`);
    console.log(`seconds: ${seconds}, \ntypeof seconds: ${typeof(seconds)}`);
    console.log(`message: ${message}`);
};
console.log('--- finished: convert-seconds.js');