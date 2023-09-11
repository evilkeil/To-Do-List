import { mainContainer,CardList} from "../cache/domElements";
import { emptyMessageString } from "../cache/strings";

export default function emptyMessage(){
    mainContainer.removeChild(CardList);
    const h1 = document.createElement('h1');
    h1.textContent = emptyMessageString;
    h1.classList.add('empty');
    mainContainer.classList.add('center-grid');
    mainContainer.appendChild(h1);
}