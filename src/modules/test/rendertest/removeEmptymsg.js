import { mainContainer,CardList } from "../cache/domElements";




export default function removeEmptyMessage(){
    if (mainContainer.classList.contains('center-grid')){

        const emptymsg = document.querySelector('.empty');
        
        mainContainer.classList.remove('center-grid');
        mainContainer.removeChild(emptymsg);
       }
    mainContainer.appendChild(CardList);
}
