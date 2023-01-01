const taskDiv = document.querySelector('.tasks');
const addtask = document.getElementById('add-task');
const newTask = document.getElementById('new-task-input');

let tasksArray = []

function addNewTask(taskVal){
    let task = document.createElement('div');
    task.className = "task";
    let p = document.createElement('p');
    p.textContent = taskVal;
    let button = document.createElement('button');
    button.className = 'closeBtn';
    let i = document.createElement('i');
    i.className = 'fa-solid fa-trash';
    button.appendChild(i)
    task.appendChild(p);
    task.appendChild(button);
    taskDiv.appendChild(task);
    newTask.value = ""
}
taskDiv.addEventListener('click',(e)=>{
    if(e.target.classList.contains('checked')){
        e.target.classList.remove('checked')
    }else{
        e.target.classList.add('checked')
    }
    if (e.target.getAttribute('class') == "fa-solid fa-trash" || e.target.getAttribute('class') == "fa-solid fa-trash checked"){
            let parentDiv = e.target.parentElement.parentElement;
            const index = Array.from(
                parentDiv.parentElement.children
              ).indexOf(parentDiv);
              
              console.log(index);
            tasksArray.splice(index,1);
            localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
            console.log(tasksArray);
            parentDiv.remove();
    }
})

addtask.addEventListener('click',()=>{
    if(newTask.value != ""){
        tasksArray.push(newTask.value);
        localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
        let storedNames = JSON.parse(localStorage.getItem("tasksArray"));
        console.log(storedNames);
        addNewTask(newTask.value)
    }
})
window.onload = () =>{
    let storedNames = JSON.parse(localStorage.getItem("tasksArray"));
    storedNames.forEach(element => {
        addNewTask(element)
    });
};