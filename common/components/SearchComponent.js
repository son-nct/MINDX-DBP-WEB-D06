import { Button } from  './Button.js'
import { Input } from  './Input.js'
import { PropsConstant } from './Constant.js';

class SearchComponent {
    $container;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('app-container');

        // declare props constant
        const btn_props = PropsConstant.btn_props;
        const input_props = PropsConstant.input_props;


        let reset_btn = new Button(btn_props);
        let input_search = new Input(input_props);

        this.$container.appendChild(input_search.render());
        this.$container.appendChild(reset_btn.render());
        
    }

    render() {
        return this.$container;
    }
}

export { SearchComponent }