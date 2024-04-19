// Function to initialize the todo list from Local Storage
function initializeTodoList() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");
  
    // Clear the existing list
    taskList.innerHTML = "";
  
    // Display the tasks
    savedTasks.forEach(task => {
      const li = document.createElement("li");
      li.textContent = task;
      li.onclick = () => markTaskAsCompleted(li);
      taskList.appendChild(li);
    });
  }
  
  // Function to add a new task to the todo list
  function addTask() {
    const newTaskInput = document.getElementById("newTask");
    const newTask = newTaskInput.value.trim();
  
    if (newTask !== "") {
      const taskList = document.getElementById("taskList");
      const li = document.createElement("li");
      li.textContent = newTask;
      li.onclick = () => markTaskAsCompleted(li);
      taskList.appendChild(li);
  
      // Save the updated todo list to Local Storage
      saveTodoListToLocalStorage();
  
      // Clear the input field
      newTaskInput.value = "";
    }
  }
  
  // Function to mark a task as completed
  function markTaskAsCompleted(taskElement) {
    taskElement.classList.toggle("completed");
  
    // Save the updated todo list to Local Storage
    saveTodoListToLocalStorage();
  }
  
  // Function to save the todo list to Local Storage
  function saveTodoListToLocalStorage() {
    const taskListItems = document.querySelectorAll("#taskList li");
    const tasks = Array.from(taskListItems).map(task => task.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  // Call the initializeTodoList function when the page loads
  initializeTodoList();
  