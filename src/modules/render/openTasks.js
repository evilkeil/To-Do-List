import { CardList, mainContainer } from "../cache/domElements";
import taskDivComponent from "../components/taskListRelatedComponents/taskDivComponent";

export default function openTaskList(target,uid,title){
    if (target.classList.contains('card')){
        console.log(title);
        const isDeleteBtn = target.querySelector('.delete-project-btn');
        if (!isDeleteBtn) {
        //    mainContainer.removeChild(CardList);
        // taskDivComponent(title);
        console.log(title);
          }
    }
    
}