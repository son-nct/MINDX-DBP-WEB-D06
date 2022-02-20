import { SearchComponent } from "./common/components/SearchComponent.js";
import { Method } from "./common/shared/Constant.js";
import { CardsComponent } from "./common/components/CardsComponent.js";

const app = document.getElementById("app");

const searchComponent = new SearchComponent();
app.appendChild(searchComponent.render());

let btn_search = document.querySelector(".btn-search");
btn_search.addEventListener("click", () => {
  if (app.childNodes.length > 1) {
    Method.removeChild();
  }

  let checked = Method.checkInputValue();

  if (checked) {
    let inputValue = Method.getInputValue();
    Method.getUserFromGithub(inputValue)
      .then((user) => {
        let user_response = JSON.parse(user);

        if (user_response.message !== "Not Found") {
          let card = new CardsComponent(user_response);
          app.appendChild(card.render());
        }

        console.log(user_response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // alert("123");
      });
  }
});
