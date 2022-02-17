import {TodoComponent} from './todoComponent.js';

const app = document.getElementById('app');


const arr = [
    {id : 1, content: 'Buy a new gaming laptop'},
    {id : 2, content: 'Complete a previous task'},
    {id : 1, content: 'Buy a new gaming laptop'},
    {id : 2, content: 'Complete a previous task'},
]

let todos = new TodoComponent(arr);
app.appendChild(todos.render());