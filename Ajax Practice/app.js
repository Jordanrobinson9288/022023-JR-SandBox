/* Exercise: Nutrition Facts

    Create an empty webpage.
    Download nutrition.xml from https://gist.github.com/3000322 and place in your project folder.
    Use AJAX via jQuery or JS API to fetch the file into the page.
    Create a table. For each <food> in the XML file, create a row in the table with the food name and nutritional facts - serving size, calories, carbs.
    Bonus: Use the tablesorter jQuery plugin to make the table sortable by the nutritional facts.
*/

// const feed = document.querySelector("#feed")
// const nutrition = "https://gist.github.com/3000322"
// const table = document.createElement("table")

// function run() {

//     // Creating Our XMLHttpRequest object 
//     let xhr = new XMLHttpRequest();

//     // Making our connection  
//     let url = "https://gist.github.com/pamelafox/3000322.js"
//     let urlS = url.JSON.stringify(url)   
//     xhr.open("GET", urlS, true);

//     // function execute after request is successful 
//     xhr.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this.responseText);
//         }
//     }
//     // Sending our request 
//     xhr.send();
// }
// run();

console.log(fetch('https://gist.github.com/pamelafox/3000322.js'));       
