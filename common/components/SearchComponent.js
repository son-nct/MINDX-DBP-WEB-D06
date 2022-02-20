import { Button } from  './Button.js'
import { Input } from  './Input.js'
import { PropsConstant } from '../shared/Constant.js';

class SearchComponent {
    $container;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('search-container');

        // declare props constant
        const clear_btn_props = PropsConstant.btn_clear_props;
        const search_btn_props = PropsConstant.btn_search_props;

        const input_props = PropsConstant.input_props;


        let reset_btn = new Button(clear_btn_props);
        let search_btn = new Button(search_btn_props);
        let input_search = new Input(input_props);

        this.$container.appendChild(input_search.render());
        this.$container.appendChild(search_btn.render());
        this.$container.appendChild(reset_btn.render());
        
    }

    render() {
        return this.$container;
    }
}

export { SearchComponent }