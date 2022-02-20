class Input {
  $input;
  $container;
  $icon;
  $checked;

  //truyền obj có các prop set attribute for input
  // id, className = [], type, placeholder, width, height, icon

  constructor(props = {}) {

    console.log(props)

    if (props.icon && props.icon.length > 0) {
      this.$container = document.createElement("div");
      this.$container.classList.add("input-container");

      this.$icon = document.createElement("i");
      this.$icon.innerHTML = icon;
      this.$checked = true;

    } else {
      this.$input = document.createElement("input");
      this.$input.classList.add("input");
      this.$input.id = props.id;

      props.className.forEach((className) => {
        this.$input.classList.add(className);
      });

      this.$input.type = props.type;
      this.$input.placeholder = props.placeholder;
      

      this.$input.style.width = `${props.width}px`;
      this.$input.style.height = `${props.height}px`;
      this.$input.innerHTML = props.content;

    }
  }

  render() {
    if(this.$checked) {
        this.$container.appendChild(this.$input);
        this.$container.appendChild(this.$icon);
        return this.$container;

    }else {
        return this.$input;
    }
  }
}


export { Input }