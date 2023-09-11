import { CardList } from "../cache/domElements";
import cardComponent from "../components/cardComponent";




export default function renderProjectList(arr){
    
    arr.forEach(element => {
        const UID = element.UID;
        const date = element.date;
        const mark = element.marker;
        const name =element.title;
        const cardExists = document.querySelector(`[data-UID="${UID}"]`);
        if(!cardExists){
            CardList.appendChild(cardComponent(UID,date,mark,name));
        }
        
    });
}