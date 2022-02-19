const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
let ToDos = [];
const TODO_KEY = "toDos";

function saveToDos(){
    localStorage.setItem(TODO_KEY, JSON.stringify(ToDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    ToDos = ToDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");

    button.innerText = "X"; 
    button.addEventListener("click",deleteTodo);
    //todoList >li >span & button
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    ToDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit",handleTodoSubmit);
const savedToDos = localStorage.getItem(TODO_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    ToDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}