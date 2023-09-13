import { CardList, mainContainer } from "../cache/domElements";
import removeProjectsAndAppendTasks from "../components/taskListRelatedComponents/removeProjectsAppendTasks";
import retriveTasks from "../components/taskListRelatedComponents/retriveTasks";
import renderTasks from "./renderTaskList";
import taskTitleComponent from "../components/taskListRelatedComponents/taskTitleComponent";

export default function openTaskList(target,uid,title){
    const isDeleteBtn = target.querySelector('.delete-project-btn');
    
    if (target.classList.contains('card') && !(target === isDeleteBtn)){
        removeProjectsAndAppendTasks()
        taskTitleComponent(title);
        // const taskList = retriveTasks(title,uid);
        // // console.log( tasks)
        // renderTasks(taskList);
          }
    }
    
