//Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
//Functions

function addTodo(e) {
  //Prevent natural behaviour
  e.preventDefault();

  //Create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create list
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;

  //Save to local
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";

  //Create Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //attach final Todo
  todoList.appendChild(todoDiv);
}

function deleteCheck(e) {
    const item = e.target;
    //delete
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;

        //todo animation
        todo.classList.add ("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }

    //check mark
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}