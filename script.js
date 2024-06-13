const welcomeMsg = document.getElementById("welcomeMsg");
const menuBar = document.getElementById("menu-bar");
const taskInput = document.getElementById("task-input");
const tasksContainer = document.getElementById("tasks-container");
let username = "Luiza";

welcomeMsg.textContent += username === "" ? "guest" + "!": username + "!";

function createTask(){
    if(taskInput.value === ""){
        alert("you must write something");
    }
    else{
        let task = document.createElement("div");
        task.className = "task";
        task.innerHTML = taskInput.value;
        tasksContainer.appendChild(task);
        taskInput.value = "";
    }
}

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        createTask();
    }
});

function openMenu(){

}
