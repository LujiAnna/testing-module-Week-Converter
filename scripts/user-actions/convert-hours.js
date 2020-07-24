function hoursHandler (){

  let hours=weeks*7*24;
  let message = `${weeks} week is equal to ${hours} hours`;
  alert(message);
  console.log(`weeks: ${weeks}, \ntypeof weeks: ${typeof(weeks)}`);
  console.log(`hours: 168*${weeks}`);
  console.log(`hours: ${hours}, \ntypeof hours: ${typeof(hours)}`);
  console.log(`message: ${message}`);
};
console.log('--- finished: convert-hours.js');