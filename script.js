// Select elements
const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const todoList = document.getElementById('todo-list');

// Initialize tasks array
let tasks = [];

// Function to add task
function addTask(task) {
    // Create new task object
    const newTask = {
        text: task,
        completed: false
    };

    // Add task to tasks array
    tasks.push(newTask);

    // Update todo list
    updateTodoList();
}

// Function to update todo list
function updateTodoList() {
    // Clear todo list
    todoList.innerHTML = '';

    // Loop through tasks array
    tasks.forEach((task, index) => {
        // Create new list item
        const listItem = document.createElement('li');

        // Create checkbox to mark task as completed
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            // Update task status
            tasks[index].completed = checkbox.checked;
            updateTodoList();
        });

        // Create text node for task text
        const textNode = document.createTextNode(task.text);

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            // Remove task from tasks array
            tasks.splice(index, 1);
            updateTodoList();
        });

        // Append elements to list item
        listItem.appendChild(checkbox);
        listItem.appendChild(textNode);
        listItem.appendChild(deleteButton);

        // Add class if task is completed
        if (task.completed) {
            listItem.classList.add('completed');
        }

        // Append list item to todo list
        todoList.appendChild(listItem);
    });
}

// Add event listener to add task button
addTaskButton.addEventListener('click', () => {
    // Get task text from input field
    const taskText = taskInput.value.trim();

    // Check if task text is not empty
    if (taskText !== '') {
        // Add task
        addTask(taskText);

        // Clear input field
        taskInput.value = '';
    }
});