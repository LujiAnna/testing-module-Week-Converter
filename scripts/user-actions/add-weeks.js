'use strict';
console.log('--- loading: add-weeks.js');

const weeksHandler = () => {
  debugger;
  const userInput = prompt('Write the amount of weeks you want to convert:');
  if (!userInput) {
    return;
  }
  if (isNaN(userInput) || userInput < 0) { 
      alert(`Please enter a positive number`);
      return;
  }
  weeks = Number(userInput);
  const newMessage = `You want to convert ${userInput} week(s)`;
  alert(newMessage);
};
