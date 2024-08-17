
//JS Practice 01: Print even numbers from 1 to 10 

for (let num = 0; num <= 10; num++){
    if (num % 2 === 0) {
    //    window.print(num);
    //    alert(num);
    break;
    }
}

//JS Practice 02: Dates & Times
/* 
Write a JavaScript program to display the current day and time in the following format. Sample Output : 
td is : Tuesday.
Current time is : 10 PM : 30 : 38 

JSP 04 - Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

// debugger

// getDate(dd/mm);

let todayText = document.getElementById("todayText");
let currTime = document.getElementById("currentTime");
let td = new Date();
let daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const currentTime = td.toLocaleTimeString()

//--Calculate milliseconds in a year
const minute = 1000 * 60
const hour = minute * 60
const day = hour * 24
const year = day * 365
const currentDayOfWeek = daysOfTheWeek[td.getDay()]


// Print to Page

// function getDate(str) {
//     var ops = {year: 'numeric'}; 
//     ops.month = ops.day = '2-digit'; 
//     return new Date(str).toLocaleDateString(0, ops);
// }

//ERROR!! THE DATE IS INCORRECT <<<<<------!!!! Correct with padStart(x,y)
// let td = new Date();

// let dd = td.getDate()
// dd = string(td.getate()).padStart(2,'0')
// let dateEl = `${new Date().getDate() <  10 ? "0" : ""}${new Date().getDate()}`

// alert(mm)
let yyyy = td.getFullYear()
let yearEl = td.getFullYear()
let hr = td.getHours() < 10 ? "0" : ""
// let hrx = hrx() => { x.append(" AM")}
let am = "AM"
if (td.getHours() >= 13){ 
    am == "PM" }
    { am == "AM"}

let mm = (td.getMonth() + 1) < 10 ? "0" : ""

// if(td.getHours() > 12)
//     let x == "PM" ? x == "AM"

// let mmx = ${ td.getMonth() } < 10 ? "0" : ""
// let dateListEl = " " + mm + "/" + dd + "/" + yyyy
// let min = td.getMinutes()
let mnx = td.getMinutes() < 10 ? "0" : "" 
let dte = td.getDate()
let dtex = dte < 10 ? "0" : ""
todayText.append(" " + currentDayOfWeek);
currTime.append(` ${hr}${td.getHours()} ${am} : ${mnx} ${td.getMinutes()} : ${td.getSeconds()} -  ${mm}${td.getMonth()}/${dtex}${td.getDate()}/${yyyy}`)




// if(currentDayOfWeek) {
//     alert(mnx);
// }

//JS Practice 03: Write a JavaScript math program

// Define the lengths of the three sides of a triangle


let sandbox3 = document.getElementById("answer3");
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 

// Calculate the semi-perimeter of the triangle
var s = (side1 + side2 + side3) / 2;

// Use Heron's formula to calculate the area of the triangle
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

// Log the calculated area to the console
sandbox3.innerHTML = "The answer is: " + area;

// JSP 05. Print a table containing multiplication tables (1 to 10)
// In a multiply.js file now
// YouTube Source: https://www.youtube.com/watch?v=80Ba_tAB7us

var table = document.getElementById('myTable');
    var output = "";

    for (var i=1; i<=12; i++) {
        output+="<tr>";
        for (var j=1; j<=12; j++){
            if(i==1 && j==1) {
            output+="<th>&times;</th>"
        } else {
            if(i==1||j==1){
                output+="<th>"+i*j+"</th>";
            } else {
            output+="<td>" + i*j + "</td>";
            }
        }
    }
        output+="</tr>";
    }
    table.innerHTML = output;

    //JSP 06 - KM to Miles
    // A kilometer is 0.62 of a mile, and a mile is 1.61 kilometers

    const kil = document.getElementById("kil")
    const mil = document.getElementById("mil")
    const convert = document.getElementById("submit")
    const outputDiv = document.getElementById("outputDiv")
    
    // function k2m(e) {
    //     e.preventDefault();

    //     return kilo * 0.62
    // }
    
    convert.addEventListener('click', function(e){
        e.preventDefault();

        let kilo = parseFloat(kil.value)
        let milo = parseFloat(mil.value)
        let km = 1.60934
        let mi = 0.62
        let kilo2mile = kilo * mi
        let mile2kilo = milo * km
        mil.value = kilo2mile
        kil.value = mile2kilo
    });

    // function m2k(y) { 
    //     let y = miles / 0.62      
    //     return y
    // }
    