import { CardList} from "../cache/domElements";
import deleteProjectBtn from "./deleteProjectEventListerner";
import openTaskList from "./openTasks";

export default function cardEventListener(arr,n){
    CardList.addEventListener('click',(e)=>{
        const target = e.target;
        const closestLi = target.closest('li');
        const uid = closestLi.getAttribute('data-uid')
        const titleElement = closestLi.querySelector('.project-title');
        const title = titleElement.textContent;
        deleteProjectBtn(arr,n,target);
        openTaskList(target,uid,title);
        // if(target.classList.contains('card')){
        //     console.log("there is a card")
        // }
    })
        
   
}