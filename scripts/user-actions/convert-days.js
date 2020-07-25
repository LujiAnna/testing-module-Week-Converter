'use strict';

console.log('--- loading: convert-days.js');

const daysConverter = (weeks) => {
    return weeks * 7;
}

const daysHandler = () => {
    let days = daysConverter(weeks);
    let message = `${weeks} week(s) is equal to ${days} days`;
    alert(message);
    console.log(`weeks: ${weeks}, \ntypeof weeks: ${typeof(weeks)}`);
    console.log(`days: 7*${weeks}`);
    console.log(`days: ${days}, \ntypeof days: ${typeof(days)}`);
    console.log(`message: ${message}`);
};
console.log('--- finished: convert-days.js');