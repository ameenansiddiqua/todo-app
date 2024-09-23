function addTask() {
    var task = document.querySelector('#task').value; // Get the task description from input
    if (!task) return; // If input is empty, do nothing
  
    var tasks = document.querySelector('#tasks'); // Get the task list container
    var li = document.createElement('li'); // Create a new list item
  
    // Add task description to the list item
    li.innerHTML = task + '&nbsp;&nbsp;';
  
    // Create the delete button for the task
    var btn = document.createElement('button');
    btn.innerHTML = 'Delete task';
    btn.onclick = function() {
      li.remove(); // Remove the task when the delete button is clicked
    };
  
    // Add the delete button to the list item
    li.appendChild(btn);
  
    // Append the task to the task list if it's under 10 tasks
    if (tasks.childElementCount < 10) {
      tasks.appendChild(li);
    } else {
      alert('You can only add 10 tasks at a time.');
    }
  
    document.querySelector('#task').value = ''; // Clear input field after adding task
  }
  
  // Function to delete all tasks at once
  function delTask() {
    var taskList = document.getElementById('tasks');
    taskList.innerHTML = ''; // Clear all tasks from the list
  }
  
  
