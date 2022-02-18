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
    this.$input.id = "todo-input";

    this.$input.addEventListener("keypress", this.addTodoByEnter);

    this.$button = document.createElement("button");
    this.$button.classList.add("btn", "btn-add");
    this.$button.innerHTML = `<i class="fa fa-plus"></i>`;

    /* process add todo */
    this.$button.addEventListener("click", this.addTodo);

    this.$itemContainer = document.createElement("div");
    this.$itemContainer.classList.add("todo-list");

    if (todoList.length > 0) {
      for (let i = 0; i < todoList.length; i++) {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        todo.style.cursor = "default";

        let btn_trash = document.createElement("span");
        btn_trash.classList.add("btn-trash");
        btn_trash.id = "btn-trash";

        btn_trash.setAttribute("todo-id", todoList[i].id);

        /* process remove todo */
        btn_trash.addEventListener("click", this.removeTodo);

        let trash_icon = document.createElement("i");
        trash_icon.classList.add("fa", "fa-trash-o", "trash-icon");
        trash_icon.setAttribute("todo-id", todoList[i].id);

        btn_trash.appendChild(trash_icon);

        let content = document.createElement("p");
        content.classList.add("todo-content");
        content.innerHTML = todoList[i].content;

        todo.appendChild(content);
        todo.appendChild(btn_trash);

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

      this.$btnClearAll.addEventListener("click", this.removeAll);
    }
  }

  // ADD TO DO WHEN ENTER
  addTodoByEnter = ($evt) => {
    if ($evt.key === "Enter") {
      let value = document.getElementById("todo-input").value;

      if (value.length > 0) {
        this.addTodo();
      }
    }
  };

  // ADD TODO WHEN CLICK BTN
  addTodo = ($evt) => {
    let value = document.getElementById("todo-input").value;

    if (value.length == 0) {
      swal("Oh no!", "Please input your todo ^^");
    } else {
      let curIndex = JSON.parse(localStorage.getItem("curIndex"));
      let todoList = JSON.parse(localStorage.getItem("todos"));

      let todo = {
        id: (curIndex += 1),
        content: value,
      };

      todoList.push(todo);

      localStorage.setItem("todos", JSON.stringify(todoList));
      localStorage.setItem("curIndex", JSON.stringify(curIndex));

      value = "";

      location.reload();
    }
  };

  // REMOVE TODO WHEN CLICK TRASH BUTTON
  removeTodo = ($evt) => {
    let btn = $evt.target;
    let id = parseInt(btn.getAttribute("todo-id"));

    let todoList = JSON.parse(localStorage.getItem("todos"));

    swal({
      title: "Are you sure to delete this todo?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Deleted !", {
          icon: "success",
        }).then(() => {
          todoList.forEach((todo, index) => {
            if (todo.id === id) {
              todoList.splice(index, 1);
              localStorage.setItem("todos", JSON.stringify(todoList));
              location.reload();
            }
          });
        });
      }
    });
  };

  // REMOVE ALL TODO WHEN CLICK BUTTON CLEAR
  removeAll = ($evt) => {
    swal({
      title: "Are you sure to delete all todo?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.removeItem("todos");
        localStorage.removeItem("curIndex");

        location.reload();
      }
    });
  };

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
