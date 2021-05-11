function AddTask(){
  let taskDateInput = document.querySelector('.task-date-input');
  let taskTextInput = document.querySelector('.task-text-input');
  let addTask = document.querySelector('.task-add');
  if(taskTextInput.value !=="" && taskDateInput.value !==""){
    addTask.insertAdjacentHTML("afterEnd",
      ` <div class="task">
          <div class="task-title">
            <div></div>
            <span class="task-date">${taskDateInput.value}</span>
            <img class="main-task-add-img" src="img/remove.svg" alt="">
          </div>
          <div class="task-text">
            <p>${taskTextInput.value}</p>
          </div>
        </div>
    `);
    let deleteTask = document.querySelectorAll(".main-task-add-img");
    deleteTask.forEach((e) => {
      e.addEventListener('click', () =>{
        e.parentNode.parentNode.style.display = 'none';
      })
    });
    taskDateInput.value = '';
    taskTextInput.value = '';
  }
}

function DeleteTask(btn){
  btn.target.parentNode.parentNode.parentNode.style.display = 'none';
}

function ShowTask(){
  let addTask = document.querySelector('.task-add');
  addTask.style.display = "block";
}

function HideTask(){
  let addTask = document.querySelector('.task-add');
  addTask.style.display = "none";
}

export {AddTask, DeleteTask, ShowTask, HideTask};