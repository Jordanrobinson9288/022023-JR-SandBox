
//JS Practice 01: Print even numbers from 1 to 10 

for (let num = 0; num <= 10; num++){
    if (num % 2 === 0) {
       // window.print(num);
       // alert(num);
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
let yyyy = td.getFullYear()

// Print to Page

function getDate(str) {
    var ops = {year: 'numeric'}; 
    ops.month = ops.day = '2-digit'; 
    return new Date(str).toLocaleDateString(0, ops);
}

//ERROR!! THE DATE IS INCORRECT <<<<<------!!!! Correct with padStart(x,y)
// let td = new Date();
let mm = (td.getMonth() + 1)
// mm = string(td.getMonth() + 1).padStart(2,'0')
let dd = td.getDate()
// dd = string(td.getDate()).padStart(2,'0')
// let dateEl = `${new Date().getDate() <  10 ? "0" : ""}${new Date().getDate()}`

alert(mm)
let yearEl = td.getFullYear()
let dateListEl = " " + mm + "/" + dd + "/" + yyyy

todayText.append(" " + currentDayOfWeek);
currTime.append(`${td.getHours()
} + ":" + 
${td.getMinutes()
} + " - " + ${dd}}` )

// currTime.append("" + `${td.getHours() < 10 ? "0" : ""} ${td.getHours()}` + ":" + `${td.getMinutes()  < 10 ? "0" : ""}${td.getMinutes()}`+ " - " + day);


if(currentDayOfWeek) {
    alert(dateListEl);
}

//JS Practice 03: Write a JavaScript math program

// Define the lengths of the three sides of a triangle

/*---
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


const table = document.getElementById("mxp")
let output = ""
    
for (let j = 1; j <= 10; j++){
    output += "<tr>"
    for (let i = 1; i <= 20; i++){
        if(i==1 || j==1)
            output+="<th>"+i+j+"</th>"
            else 
            output+="<td>"+i+j+"</td>"
        
        output="</tr>"
    }
    table.innerHTML = output
    }
---*/