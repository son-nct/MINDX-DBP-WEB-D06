class Input {
  $input;
  $checked;

  //truyền obj có các prop set attribute for input
  // id, className = [], type, placeholder, width, height, icon

  constructor(props = {}) {
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

  render() {
    return this.$input;
  }
}

export { Input };
