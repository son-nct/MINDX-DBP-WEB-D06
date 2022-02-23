import { LogoComponent } from "./common/components/LogoComponent.js";
import { SearchComponent } from "./common/components/SearchComponent.js";
import { Method , PropsConstant } from "./common/shared/Constant.js";
import { CardsComponent } from "./common/components/CardsComponent.js";


let logo_props = PropsConstant.logo_props;


const app = document.getElementById("app");


let logoComponent = new LogoComponent(logo_props);
app.appendChild(logoComponent.render());

const searchComponent = new SearchComponent();
app.appendChild(searchComponent.render());

let btn_search = document.querySelector(".btn-search");
let btn_reset = document.querySelector(".btn-reset");

//process when btn reset is clicked
btn_reset.addEventListener("click", () => {
  Method.resetValue();
  Method.removeChild();
});


//process when btn search is clicked
btn_search.addEventListener("click", () => {
  if (app.childNodes.length > 1) {
    Method.removeChild();
  }

  let checked = Method.checkInputValue();

  if (checked) {
    Method.setLoading(true);

    let inputValue = Method.getInputValue();
    Method.getUserFromGithub(inputValue)
      .then((user) => {
        Method.keepInputValue();

        let user_response = JSON.parse(user);
        sessionStorage.setItem("user", JSON.stringify(user_response));

        if (user_response.message !== "Not Found") {
          let card = new CardsComponent(user_response);
          app.appendChild(card.render());
        } else {
          swal("Not found users !");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        Method.setLoading(false);
      });
  }
});

// check if user refresh the page
if (window.performance) {
  Method.getInputValue();

  Method.getInputValueFromSession();

  let user_saved = JSON.parse(sessionStorage.getItem("user"));
  if (user_saved) {
    let card = new CardsComponent(user_saved);
    app.appendChild(card.render());
  }

  if (user_saved && user_saved.message === "Not Found") {
    Method.removeChild();
  }
}

