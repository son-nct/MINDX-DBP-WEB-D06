import { SearchComponent } from './common/components/SearchComponent.js';

const app = document.getElementById('app');

const searchComponent = new SearchComponent();

app.appendChild(searchComponent.render());

