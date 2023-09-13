import { CardList} from "../cache/domElements";
import deleteProjectBtn from "./deleteProjectEventListerner";

export default function cardEventListener(arr,n){
    CardList.addEventListener('click',(e)=>{
        const target = e.target;
        deleteProjectBtn(arr,n,target);
    })
        
   
}