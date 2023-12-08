let tasks = [];

// Function to render tasks
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.addEventListener('change', () => toggleDone(index));

    const taskDetails = document.createElement('div');
    taskDetails.className = 'task-details';

    const taskName = document.createElement('span');
    taskName.innerText = task.name;

    const taskDesc = document.createElement('p');
    taskDesc.innerText = task.description;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(index));

    taskDetails.appendChild(taskName);
    taskDetails.appendChild(taskDesc);

    taskElement.appendChild(checkbox);
    taskElement.appendChild(taskDetails);
    taskElement.appendChild(deleteButton);

    taskList.appendChild(taskElement);
  });
}

// Function to add a new task
function addTask() {
  const newTaskNameInput = document.getElementById('newTaskName');
  const newTaskDescInput = document.getElementById('newTaskDesc');

  const newName = newTaskNameInput.value.trim();
  const newDesc = newTaskDescInput.value.trim();

  if (newName !== '' || newDesc !== '') {
    tasks.push({ name: newName, description: newDesc, done: false });
    newTaskNameInput.value = '';
    newTaskDescInput.value = '';
    renderTasks();
  }
}

// Function to toggle task done status
function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Initial rendering
renderTasks();
