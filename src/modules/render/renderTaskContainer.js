import { taskContainer, taskList, taskTitle } from "../cache/domElements";
import renderTaskList from "./renderTaskList";
import renderTasksRemaining from "./renderTasksRemaining";

export default function renderTaskContainer(arr,selected){
   if (selected === null){
        taskContainer.style.display = "none";
   }else{
        taskContainer.style.display = "";
    const current = arr.find(function(item){
        return (item.id === selected)
     });
     taskTitle.innerText = current.name;
     renderTasksRemaining(current);
     renderTaskList(current);
   }
    
   
  
    
    
}