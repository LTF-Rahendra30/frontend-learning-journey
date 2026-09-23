const taskButton = document.getElementById('submit-button');
const emptyStete = document.getElementById('emptyState');
const taskList = document.getElementById('taskList');
const nameTask = document.getElementById('name');


taskButton.addEventListener('click', function(event){
    event.preventDefault();

    const newtask = document.createElement('div');
    const nameValue = nameTask.value;
    
    newtask.innerHTML = `
        <span class="task-text">${nameValue}</span>
        <button class="remove-task-button">Hapus Tugas</button>
    `
    newtask.classList.add('task-item')
    emptyStete.remove()

    taskList.append(newtask);
    
})
// === DELETE TASK ====
taskList.addEventListener('click',function(event){
    if(event.target.classList.contains('remove-task-button')){
        event.target.parentElement.remove();
    }
})