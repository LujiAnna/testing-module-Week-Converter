
function hours_converterHandler (){
  weeks=6;
    let hours=weeks*7*24;
    if(weeks!==0)
    alert(`the weeks in hours `+hours+'h');
    else if(weeks===0)
    alert(`please put the numbers of  weeks `);
    else if(typeof weeks !=='number')
    alert(`please put a number`);
   
    console.log('numbers of weeks '+weeks);
    console.log('weeks in hours '+hours+'h');
}
 