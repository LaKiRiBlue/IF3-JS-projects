// Define an array to store tasks
let tasks = [];

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const nameInput = document.getElementById('name');
    const descriptionInput = document.getElementById('description');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const personSelect = document.getElementById('person');
    const urgencyCheckbox = document.getElementById('urgency');

    // Get values from form inputs
    const name = nameInput.value;
    const description = descriptionInput.value;
    const startDate = new Date(startDateInput.value);
    const endDate = endDateInput.value ? new Date(endDateValue)  : endDateInput.value;
    // let endDate = null;
    // if (endDateValue) {
    //     endDate = new Date(endDateValue);
    // }
    const person = personSelect.value;

    // Check if end date is provided and older than start date
    if (endDate && endDate < startDate) {
        alert("End date cannot be older than start date");
        return; // Prevent further execution
    }

    // Create a task object
    const task = {
        name: name,
        description: description,
        startDate: startDate,
        endDate: endDate,
        person: person,
        urgency: urgencyCheckbox.checked ? 'Yes' : 'No'
    };

    // Add the task to the tasks array
    tasks.push(task);

    // Update the task list display
    updateTaskList();

    // Reset the form fields by setting them to their default values
    // nameInput.value = '';
    // descriptionInput.value = '';
    // startDateInput.value = '';
    // endDateInput.value = '';
    // personSelect.selectedIndex = 0;
    // urgencyCheckbox.checked = false;
    // document.getElementById('taskForm').reset();
     document.forms[0].reset(); //TODO : works only if there is nothing called reset in the form (by id or name)
});

// Function to update the task list display
function updateTaskList() {
    const taskList = document.getElementById('taskList');
    // Clear previous task list content
    taskList.innerHTML = '';

    // Loop through the tasks array and display each task
    tasks.forEach(function(task, index) {
        // Create a div element for each task
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task-item');

        // Create task content within the div
        taskDiv.innerHTML = `
            <p><strong>Task ${index + 1}:</strong></p>
            <p><strong>Name:</strong> ${task.name}</p>
            <p><strong>Description:</strong> ${task.description}</p>
            <p><strong>Start Date:</strong> ${task.startDate.toDateString()}</p>
            <p><strong>End Date:</strong> ${task.endDate ? task.endDate.toDateString() : "Not specified"}</p>
            <p><strong>Person:</strong> ${task.person}</p>
            <p><strong>Urgency:</strong> <span class="${task.urgency === 'Yes' ? 'urgent' : ''}">${task.urgency}</span></p>
        `;
        
        // Append task div to task list
        taskList.appendChild(taskDiv);
    });
}



//todo : with an array of objects: keep all tasks added (during the same session on the page) - avec un tableau d'objets : conserver toutes les tâches ajoutés (lors d'une même session sur la page)