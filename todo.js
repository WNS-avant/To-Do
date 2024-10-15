let totalTasks = 0;
let completedTasks = 0;

document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInputContainer = document.getElementById('taskInputContainer');
    taskInputContainer.style.display = 'block';
    this.style.display = 'none'; 
});

document.getElementById('upButton').addEventListener('click', function() {
    const taskInputContainer = document.getElementById('taskInputContainer');
    taskInputContainer.style.display = 'none';
    document.getElementById('addTaskButton').style.display = 'block'; // Show the add task button again
});

document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const taskText = this.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            this.value = '';
        }
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    const deleteButton = createActionButton('dustbin', deleteTask);
    const completeButton = createActionButton('tick', completeTask);

    taskActions.appendChild(completeButton);
    taskActions.appendChild(deleteButton);
    listItem.appendChild(taskActions);
    taskList.appendChild(listItem);

    totalTasks++;
    updateTaskCounts();

    function deleteTask() {
        if (confirm('Are you sure you want to delete this task?')) {
            taskList.removeChild(listItem);
            totalTasks--;
            if (listItem.classList.contains('completed')) {
                completedTasks--;
            }
            updateTaskCounts();
        }
    }

    function completeTask() {
        if (confirm('Are you sure you want to mark this task as completed?')){
        listItem.classList.toggle('completed');
        taskActions.removeChild(completeButton); 
        taskActions.appendChild(deleteButton); 
        taskList.appendChild(listItem);
        
        if (listItem.classList.contains('completed')) {
            completedTasks++;
        } else {
            completedTasks--;
        }
        updateTaskCounts();
    }
    }
}

function updateTaskCounts() {
    document.getElementById('num1').textContent = completedTasks; 
    document.getElementById('num2').textContent = totalTasks - completedTasks; 
}

function createActionButton(type, action) {
    const button = document.createElement('button');
    button.classList.add('task-action', type);
    button.innerHTML = type === 'dustbin' ? 
        `<svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M672.768 832.512c12.8 0 23.552-9.216 23.552-20.48V413.184h-46.592v398.848c-0.512 11.264 9.728 20.48 23.04 20.48z" fill="#FFA28D"></path><path d="M511.488 832.512c13.312 0 23.04-9.216 23.04-20.48V413.184h-46.592v398.848c0 11.264 10.752 20.48 23.552 20.48z" fill="#FFD561"></path><path d="M350.208 832.512c12.8 0 23.04-9.216 23.04-20.48V413.184h-46.08v398.848c0 11.264 10.752 20.48 23.04 20.48z" fill="#FFA28D"></path><path d="M921.088 182.272h-191.488V98.816c0-18.944-17.408-34.304-38.912-34.304h-358.4c-21.504 0-38.912 15.872-39.424 34.304v83.968H102.4c-21.504 0-38.912 15.36-38.912 34.304V378.88c0 18.944 17.408 34.304 38.912 34.304h57.344v512.512c0 18.944 16.896 34.304 38.4 34.304h626.688c21.504 0 38.912-15.872 38.912-34.304V413.184h57.344c20.992 0 38.4-15.36 38.4-34.304V216.576c0-18.432-17.408-34.304-38.4-34.304zM370.688 133.12h281.088v43.008H370.688V133.12z m414.72 758.272H237.056V413.184H785.92v478.208z m96.256-546.816H140.8V251.392h740.864v93.184z" fill="#5FFFBA"></path></g></svg>` : 
        `<svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M511.891456 928.549888c229.548032 0 415.634432-186.0864 415.634432-415.634432C927.525888 283.3664 741.439488 97.28 511.890432 97.28 282.343424 97.28 96.258048 283.3664 96.258048 512.915456c0 229.548032 186.084352 415.634432 415.634432 415.634432" fill="#FFF200"></path><path d="M436.571136 707.376128l330.3936-330.3936c5.506048-5.507072 8.571904-12.803072 8.633344-20.544512 0.060416-7.85408-2.961408-15.235072-8.511488-20.784128 0.001024-0.012288-0.001024-0.002048-0.001024-0.002048l-0.001024-0.001024c-5.410816-5.409792-12.978176-8.489984-20.687872-8.460288-7.810048 0.032768-15.13984 3.081216-20.640768 8.58112l-309.11488 309.116928-94.99648-94.998528c-5.501952-5.501952-12.833792-8.5504-20.642816-8.58112h-0.115712c-7.69536 0-15.186944 3.08224-20.569088 8.465408-11.360256 11.36128-11.307008 29.899776 0.118784 41.325568l109.924352 109.924352a29.017088 29.017088 0 0 0 4.883456 6.474752c5.658624 5.6576 13.095936 8.482816 20.550656 8.481792a29.31712 29.31712 0 0 0 20.77696-8.604672M511.891456 97.28C282.3424 97.28 96.256 283.3664 96.256 512.915456s186.0864 415.634432 415.635456 415.634432c229.548032 0 415.634432-186.085376 415.634432-415.634432C927.525888 283.365376 741.439488 97.28 511.891456 97.28m0 40.96c50.597888 0 99.661824 9.901056 145.82784 29.427712 44.61056 18.575104 83.613824 45.309056 114.0384 78.138368 30.424576 32.823936 52.989056 70.34752 67.047104 110.012928 12.883584 35.57376 19.518464 73.460736 19.518464 112.803584s-6.628736 77.229824-19.518464 112.803584c-14.058048 39.665408-36.622528 77.188992-67.047104 110.012928-30.424576 32.823936-69.42784 59.563264-114.0384 78.138368-46.166016 19.526656-95.229952 29.427712-145.82784 29.427712s-99.661824-9.901056-145.82784-29.427712c-44.61056-18.575104-83.613824-45.309056-114.0384-78.138368-30.424576-32.823936-52.989056-70.34752-67.047104-110.012928-12.883584-35.57376-19.518464-73.460736-19.518464-112.803584s6.628736-77.229824 19.518464-112.803584c14.058048-39.665408 36.622528-77.188992 67.047104-110.012928 30.424576-32.823936 69.42784-59.563264 114.0384-78.138368C412.229632 107.181056 461.293568 97.28 511.891456 97.28z" fill="#F37B1D"></path></g></svg>`;
    button.addEventListener('click', action);
    return button;
}
