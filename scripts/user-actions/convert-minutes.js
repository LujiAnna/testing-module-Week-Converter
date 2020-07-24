function minutesHandler (){
let minutes=weeks*7*24*60;
let message = `${weeks} week is equal to ${minutes} minutes`;
  alert(message);
  console.log(`weeks: ${weeks}, \ntypeof weeks: ${typeof(weeks)}`);
  console.log(`minutes: 10080*${weeks}`);
  console.log(`minutes: ${minutes}, \ntypeof minutes: ${typeof(minutes)}`);
  console.log(`message: ${message}`);
};
console.log('--- finished: convert-minutes.js');