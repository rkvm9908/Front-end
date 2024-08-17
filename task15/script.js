
document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    taskInput.style.display = 'block';
    const back = document.querySelector('.tsk-int-bs')
    back.style.display = 'block';
    
    document.getElementById('clear').addEventListener('click', () =>{
        taskInput.style.display = 'none';
        back.style.display = 'none';
        taskInput.value = '';
    });

    if (taskText !== "") {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <li>${taskText}</li>
            <button class="delete-btn"><img src="img/icons8-delete-32.png"></button>`
        taskInput.style.display = 'none';
        back.style.display = 'none';;
        
        document.getElementById('taskList').appendChild(taskItem);
        taskInput.value = '';
        
        taskItem.addEventListener('click', function () {
            taskItem.classList.toggle('selected');
            deleteBtn.style.display = 'block';
        });
        
        taskItem.addEventListener('dblclick', function () {
            taskItem.classList.toggle('');
        });
        
        const deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function () {
            taskItem.remove();
        });
        
    }
}
