/* 1. Write a JavaScript program to display the current day and time in the following format.  
-------
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

const pday = document.getElementsByClassName("getDay");
const phour = document.getElementsByClassName("getHour");
const currentDay = Date.getDay();
const getTheHour = Date.getHour(); 
const getTheTime = Date.getTime();

console.log(currentDay);

pday.innerHTML === currentDay;
phour.innerHTML === getTheHour;
