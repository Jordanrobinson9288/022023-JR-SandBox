const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const buttonClick = document.getElementById("TaskAdd");

function addTask(){
    if(inputBox.value === ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value == "";
}

buttonClick.addEventListener("click", addTask);
