import { CardList, mainContainer } from "../cache/domElements";
import retriveTasks from "../components/taskListRelatedComponents/retriveTasks";


export default function openTaskList(target,uid,title){
    const isDeleteBtn = target.querySelector('.delete-project-btn');
    
    if (target.classList.contains('card') && !(target === isDeleteBtn)){
        
        const tasks = retriveTasks(title,uid);
        console.log( tasks)
          }
    }
    
