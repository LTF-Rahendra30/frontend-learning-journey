const taskButton = document.getElementById('submit-button');
const emptyStete = document.getElementById('emptyState');
const taskList = document.getElementById('taskList');
const nameTask = document.getElementById('name');


taskButton.addEventListener('click', function(event){
    event.preventDefault();

    const newtask = document.createElement('div');
    newtask.classList.add('task-item');
    const nameValue = nameTask.value;
    
    newtask.innerHTML = `
        <span class="task-text">${nameValue}</span>
        <button class="remove-task-button">Hapus Tugas</button>
    `
    emptyStete.style.display = 'none';

    taskList.append(newtask);
    
})
// === DELETE TASK ====
taskList.addEventListener('click',function(event){
    if(event.target.classList.contains('remove-task-button')){
        event.target.parentElement.remove();

        if(taskList.children.length === 0){
            emptyStete.style.display = 'block';
        }
    }
})