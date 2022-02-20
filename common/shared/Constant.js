export const PropsConstant = {
  //props: id, className = [], width, height, content
  btn_clear_props: {
    id: "btn-clear",
    className: ["btn", "btn-reset"],
    width: 80,
    height: 35,
    content: "Reset",
  },
  btn_search_props: {
    id: "btn-search",
    className: ["btn", "btn-search"],
    width: 80,
    height: 35,
    content: "Search",
  },

  // id, className = [], type, placeholder, width, height, icon
  input_props: {
    id: "input-search",
    className: ["input", "input-search"],
    type: "text",
    placeholder: "Search Github User",
    width: 450,
    height: 35,
  },
};

export const Method = {
  getUserFromGithub: (user) => {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();

      let url = `https://api.github.com/users/${user}`;

      xhr.open("GET", url);

      xhr.onload = () => {
        resolve(xhr.responseText);
      };

      xhr.onerror = () => {
        reject(xhr.statusText);
      };

      xhr.send();
    });
  },
  checkInputValue() {
    let inputValue = document.querySelector("input").value;
    return inputValue.length > 0;
  },
  getInputValue() {
    let inputValue = document.querySelector("input").value;
    return inputValue;
  },
  removeChild() {
    let app = document.getElementById("app");

    let removeElement = document.querySelectorAll(".info-container");

    removeElement.forEach((element) => {
      app.removeChild(element);
    });
  },
};
