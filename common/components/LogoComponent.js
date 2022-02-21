

class LogoComponent {
  $container;
  $icon;
  $title;

  constructor(props) {
      console.log(props);
    
    this.$container = document.createElement("div");
    this.$container.classList.add("logo-container");

    this.$icon = document.createElement("img");
    this.$icon.classList.add("logo");

    this.$icon.src = props.src;

    this.$title = document.createElement("h1");
    this.$title.innerHTML = props.title;
  }

  render() {
    this.$container.appendChild(this.$icon);
    this.$container.appendChild(this.$title);

    return this.$container;
  }
}

export { LogoComponent }