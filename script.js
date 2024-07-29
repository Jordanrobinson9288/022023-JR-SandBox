const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// let li = "";
const buttonClick = document.getElementById("TaskAdd");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something");
    } 
    else {
        let li = doocument.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}
buttonClick.addEventListener("click", addTask);