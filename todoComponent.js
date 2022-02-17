class TodoComponent {
  $container;
  $title;
  $input;
  $button;
  $itemContainer;
  $todoFooter;
  $totalTodo;
  $btnClearAll;

  constructor(todoList = []) {
    this.$container = document.createElement("div");
    this.$container.classList.add("container");

    this.$title = document.createElement("h3");
    this.$title.classList.add("title");
    this.$title.innerHTML = "Todo App";

    this.$input = document.createElement("input");
    this.$input.type = "text";
    this.$input.placeholder = "Add your new todo";

    this.$button = document.createElement("button");
    this.$button.classList.add("btn", "btn-add");
    this.$button.innerHTML = `<i class="fa fa-plus"></i>`;

    this.$itemContainer = document.createElement("div");
    this.$itemContainer.classList.add("todo-list");

    if (todoList.length > 0) {
      for (let i = 0; i < todoList.length; i++) {
        let todo = document.createElement("div");
        todo.classList.add("todo");

        let content = document.createElement("p");
        content.classList.add("todo-content");
        content.innerHTML = todoList[i].content;

        todo.appendChild(content);

        this.$itemContainer.appendChild(todo);
      }
    }

    this.$todoFooter = document.createElement("div");
    this.$todoFooter.classList.add("todo-footer");

    this.$totalTodo = document.createElement("p");
    this.$totalTodo.innerHTML = `You have ${todoList.length} pending tasks`;

    this.$todoFooter.appendChild(this.$totalTodo);

    if (todoList.length > 0) {
      this.$btnClearAll = document.createElement("button");
      this.$btnClearAll.classList.add("btn-clear");
      this.$btnClearAll.innerHTML = "Clear all";
      this.$todoFooter.appendChild(this.$btnClearAll);
    }

    
   
  }

  render() {
    this.$container.appendChild(this.$title);
    this.$container.appendChild(this.$input);
    this.$container.appendChild(this.$button);
    this.$container.appendChild(this.$itemContainer);
    this.$container.appendChild(this.$todoFooter);
    return this.$container;
  }
}

export { TodoComponent };
