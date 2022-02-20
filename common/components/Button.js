class Button {
  $btn;

  //props: id, className = [], width, height, content
  constructor(props = {}) {
    this.$btn = document.createElement("button");
    this.$btn.classList.add("btn");
    this.$btn.id = props.id;

    props.className.forEach((className) => {
      this.$btn.classList.add(className);
    });

    this.$btn.style.width = `${props.width}px`;
    this.$btn.style.height = `${props.height}px`;
    this.$btn.innerHTML = props.content;
  }

  render() {
    return this.$btn;
  }
}

export { Button }