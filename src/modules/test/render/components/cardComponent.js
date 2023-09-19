import cardMarkerComponent from "./cardMarkerComponent";
import deleteBtnSVG from "./deleteBtnComponent";
import cardTitleComponent from "./cardTitleComponent";
import cardDateComponent from "./cardDateComponent";

export default function cardComponent(UID,date,mark,name){
    const card = document.createElement('li');
    card.classList.add('card');
    card.setAttribute('data-UID', UID);

    card.appendChild(cardMarkerComponent(mark))
    card.appendChild(deleteBtnSVG("delete-project-btn"));
    card.appendChild(cardTitleComponent(name))
    card.appendChild(cardDateComponent(date))
    return card;
}