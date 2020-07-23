function hoursHandler (){

    let hours=weeks*7*24;
     if(weeks===0)
    alert(`please put the numbers of  weeks `);
    else if(typeof weeks !=='number')
    alert(`please put a number`);
    else{
    let message = `${weeks} week(s) is equal to ${hours} h`;
    alert(message);}

    console.log('numbers of weeks '+weeks);
    console.log('weeks in hours '+hours+'h');
}