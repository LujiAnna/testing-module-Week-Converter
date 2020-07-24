function hoursHandler (){

  let hours=weeks*7*24;
  let message = `${weeks} week is equal to ${seconds} seconds`;
  alert(message);
  console.log(`weeks: ${weeks}, \ntypeof weeks: ${typeof(weeks)}`);
  console.log(`seconds: 604800*${weeks}`);
  console.log(`seconds: ${seconds}, \ntypeof seconds: ${typeof(seconds)}`);
  console.log(`message: ${message}`);
};
console.log('--- finished: convert-seconds.js');