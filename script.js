const welcomeMsg = document.getElementById("welcomeMsg");
const menuBar = document.getElementById("menu-bar");
const taskInput = document.getElementById("task-input");
const tasksContainer = document.getElementById("tasks-container");
let username = "";

welcomeMsg.textContent += username === "" ? "guest" + "!": username + "!";

function createTask(){
    if(taskInput.value === ""){
        alert("you must write something");
    }
    else{
        let task = document.createElement("div");
        task.className = "task";
        tasksContainer.appendChild(task);

        //check button
        let checkButton = document.createElement("button");
        checkButton.className = "check-btn";
        checkButton.onclick = function() {
            if (checkButton.innerHTML === "") {
                checkButton.innerHTML = "✓";
                taskText.style.textDecoration = "line-through";
            } 
            else {
                checkButton.innerHTML = "";
                taskText.style.textDecoration = "none";
            }
        };
        task.appendChild(checkButton);

        //h3 task text
        let taskText = document.createElement("h3");
        taskText.innerHTML = taskInput.value;
        taskText.className = "task-text";
        task.appendChild(taskText);

        //edit button
        // let editButton = document.createElement("button");
        // editButton.innerHTML = "✎";
        // editButton.className = "edit";
        // editButton.onclick = function() {
        //     let newTask = prompt("Edit your task:", taskText.innerHTML);
        //     if (newTask) {
        //         taskText.innerHTML = newTask;
        //     }
        // };
        // task.appendChild(editButton);

        //delete button
        let deleteButton = document.createElement("i");
        deleteButton.className = "fa-solid fa-trash";
        deleteButton.onclick = function(){
            tasksContainer.removeChild(task);
        };
        task.appendChild(deleteButton);


        taskInput.value = "";
    }
}

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        createTask();
    }
});

function openMenu(){

}
