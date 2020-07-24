'use strict';
console.log('--- loading: add-weeks.js');

const weeksHandler = () => {
  debugger;
  const userInput = prompt('Write the amount of weeks you want to convert:');
  if (!userInput) {
    return;
  }
  if (isNaN(userInput)) { 
      alert(`Please enter a number`);
      return;
  }
  weeks = Number(userInput);
  const newMessage = `You want to convert ${userInput} week(s)`;
  alert(newMessage);
};
