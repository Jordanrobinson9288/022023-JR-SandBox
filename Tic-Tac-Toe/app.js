
//JS Practice 01: Print even numbers from 1 to 10 

for (let num = 0; num <= 2; num++){
    while(num % 2 === 0) {
       window.print(num);
       alert(num+2);
    break;
    }
}

//JS Practice 02: Dates & Times
/* 
Write a JavaScript program to display the current day and time in the following format. Sample Output : 
today is : Tuesday.
Current time is : 10 PM : 30 : 38 

JSP 04 - Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

// debugger

// getodayate(dd/mm);

let todayText = document.getElementById("todayText");
let currentTimeID = document.getElementById("currentTime");
let daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


//--Calculate milliseconds in a year
const today = new Date()
const min = today.getMinutes() < 10 ? "0" : ""
const minutes = min + today.getMinutes()
const hh = today.getHours() < 10 ? "0" : ""
const hour = hh + today.getHours()
const dd = today.getDate() < 10 ? "0" : ""
const day = dd + today.getDate()
const year = today.getFullYear()
const mm = today.getMonth() + 1 < 10 ? "0" : ""
const month = mm + (today.getMonth()+1)
const currentDayOfWeek = daysOfTheWeek[today.getDay()]
// alert(today.getDay())
// const liveClock = setInterval(() => console.log(new Date().toLocaleTimeString()),1000);

// function minTail(v){
//     if(let v === minutes){
//         return = (v = v + (< 10 ? "0" : ""))
//     }
// } 
// minutes: < 10 ? "0" : ""
// month: + 1 < 10 ? "0" : ""

// let hrx = hrx() => { x.append(" AM")}
let am = "AM"
let pm = "PM"

function ampm(){
    if(hour >= 13){
        return "PM"
    } else {
        if(hour < 13){
            return "AM"
        }
    }
}

// function hours(){
    
//     if(today.getHours() >= 13){
//         let y = today.getHours() < 10 ? "0" : ""
//         let z = y + today.getHours() 
//         let x = (z - 12)

//         return x
//     } else {
//         if(today.getHours() < 13){
//             return y
//         }
//     }
// }

let amp = ampm()

//     {setInterval(startTime, 1000)}
// let clock = setInterval(myTimer, 1000);

todayText.append(" " + currentDayOfWeek)
currentTimeID.append(` ${hour}:${minutes} ${amp} - ${month}/${day}/${year}`)

// Print to Page

// function getodayate(str) {
//     var ops = {year: 'numeric'}; 
//     ops.month = ops.day = '2-digit'; 
//     return new Date(str).toLocaleDateString(0, ops);
// }


// let dd = today.getodayate()
// dd = string(today.getate()).padStart(2,'0')
// let dateEl = `${new Date().getodayate() <  10 ? "0" : ""}${new Date().getodayate()}`

// alert(mm)

// function myTimer(x) {
//   x.innerHTML = today.toLocaleTimeString();
// }

// function startTime() {
//     const today = new Date();
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('currentTime').innerHTML =  h + ":" + m + ":" + s;
//     setTimeout(startTime, 1000);
//   }
//   startTime()

//   function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
//   }

// if(today.getHours() > 12)
//     let x == "PM" ? x == "AM"

// let mmx = ${ today.getMonth() } < 10 ? "0" : ""
// let dateListEl = " " + mm + "/" + dd + "/" + yyyy
// let min = today.getMinutes()







// if(currentodayayOfWeek) {
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

var table = document.getElementById('myTable')
var output = ""

for (var i=1; i<=12; i++) {
    output+="<tr>"
    
    for (var j=1; j<=12; j++){
        
        if(i==1 && j==1) {
            output+="<th>&times;</th>"
    } else {
        if(i==1||j==1){
            output+="<th>"+i*j+"</th>"
        } 
        else {
            output+="<td>" + i*j + "</td>"
        }
    }
}
    output+="</tr>"
}
table.innerHTML = output
    

    //JSP 06 - KM to Miles
    // A kilometer is 0.62 of a mile, and a mile is 1.61 kilometers

    const kil = document.getElementById("kil")
    const mil = document.getElementById("mil")
    const convert = document.getElementById("submit")
    const kmF = document.getElementById("km-form")
    const outputDiv = document.getElementById("outputDiv")
    

    convert.addEventListener('click', function(e){
        e.preventDefault();

        let milk = mil || kil
        let km = 1.60934
        let mi = 0.62

        if (kil && kil.value) {
            mil.value = ""
            let con = kil.value * mi
            mil.value = con.toFixed(2)

            mil.addEventListener("click", () => kmF.reset())
            kil.addEventListener("click", () => kmF.reset())
        }
        else if (mil && mil.value) {
            kil.value = ""
            let ans = mil.value * km
            kil.value = ans.toFixed(2)

            mil.addEventListener("click", () => kmF.reset())
            kil.addEventListener("click", () => kmF.reset())
        }
    });

    
    

    // function m2k(y) { 
    //     let y = miles / 0.62      
    //     return y
    // }
    