//render empty message in the case of having no projects

import {emptyMessage} from '../../assets/strings.js';

export default function renderEmptymessage(){
    const mainContainer = document.getElementById('main-container');

    const h1 = document.createElement('h1');
    h1.textContent = emptyMessage;
    h1.classList.add('empty');
    mainContainer.classList.add('center-grid');
    mainContainer.appendChild(h1);
}