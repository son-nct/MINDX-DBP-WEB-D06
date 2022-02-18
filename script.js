import {TodoComponent} from './todoComponent.js';

const app = document.getElementById('app');



let todoList = JSON.parse(localStorage.getItem('todos'));

if(todoList == null || todoList.length == 0) {
    todoList = [];
    let curIndex = 0;
    localStorage.setItem('todos',JSON.stringify(todoList));
    localStorage.setItem('curIndex',JSON.stringify(curIndex));
}



let todos = new TodoComponent(todoList);
app.appendChild(todos.render());