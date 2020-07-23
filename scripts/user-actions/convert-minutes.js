function minutes_converterHandler (){
      let minutes=weeks*7*24*60;
      if(weeks!==0)
      alert(`the weeks in minutes `+minutes+'h');
      else if(weeks===0)
      alert(`please put the numbers of  weeks `);
      else if(typeof weeks !=='number')
      alert(`please put a number`);
     
      console.log('numbers of weeks '+weeks);
      console.log('weeks in minutes '+minutes+' min');
  }