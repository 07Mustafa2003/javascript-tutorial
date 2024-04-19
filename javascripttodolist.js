document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Load tasks from localStorage
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    for (const taskText of savedTasks) {
        addTask(taskText);
    }

    function saveTasksToLocalStorage() {
        const tasks = [...taskList.querySelectorAll("li span:not(.delete)")];
        const taskTexts = tasks.map((task) => task.textContent);
        localStorage.setItem("tasks", JSON.stringify(taskTexts));
    }

    function addTask(taskText) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <span class="delete">X</span>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";

        // Save tasks to localStorage
        saveTasksToLocalStorage();
    }

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            addTask(taskText);
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.className === "delete") {
            const listItem = event.target.parentElement;
            taskList.removeChild(listItem);

            // Save tasks to localStorage after a task is deleted
            saveTasksToLocalStorage();
        }
    });

    // Check/uncheck tasks and save their state to localStorage
    taskList.addEventListener("change", function (event) {
        if (event.target.type === "checkbox") {
            saveTasksToLocalStorage();
        }
    });
});
