// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push(taskText);
        taskInput.value = "";
        displayTasks();
    }
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `
            ${tasks[i]}
            <button onclick="deleteTask(${i})">Delete</button>
        `;
        taskList.appendChild(li);
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Function to delete all tasks
function deleteAllTasks() {
    tasks = [];
    displayTasks();
}

// Initial display of tasks
displayTasks();
