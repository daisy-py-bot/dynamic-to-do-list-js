document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn'); // Corrected ID
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Create the addTask Function
    function addTask() {
      const taskText = taskInput.value.trim();
      
      // Check if taskText is not empty
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      // Create new list item for the task
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      // Create remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.className = 'remove-btn';
  
      // Add event listener to remove button
      removeButton.onclick = function() {
        taskList.removeChild(listItem);
      };
  
      // Append remove button to list item and list item to task list
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
  
      // Clear the task input field
      taskInput.value = '';
    }
  
    // Attach Event Listeners
    addButton.addEventListener('click', addTask);
  
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
});
