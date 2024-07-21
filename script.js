document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }
  
    // Create the addTask Function
    function addTask(taskText, save = true) {
        // Check if taskText is not empty
        if (taskText.trim() === "") {
            alert("Please enter a task.");
            return;
        }
  
        // Create new list item for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        listItem.classList.add('task-item'); // Add class to list item
  
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn'); // Add class to remove button
  
        // Add event listener to remove button
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
            removeTask(taskText);
        };
  
        // Append remove button to list item and list item to task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
  
        // Clear the task input field
        taskInput.value = '';
  
        // Save to Local Storage if needed
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }
  
    // Remove task from Local Storage
    function removeTask(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  
    // Attach Event Listeners
    addButton.addEventListener('click', () => addTask(taskInput.value));
  
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });
  
    // Load tasks when the page loads
    loadTasks();
});
