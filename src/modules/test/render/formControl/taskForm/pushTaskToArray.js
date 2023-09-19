import { addTaskInput } from "../../cache/domElements";
import renderAddedTask from "../../renderAddedTask";
import renderTasks from "../../renderTaskList";

export default function pushTaskToArray(arr,title){
    const input = addTaskInput.value;
   if(!input){
    return;
   }
    const inputobj = {
        task: input,
        status:'task',
    }
  console.log(title);
    arr.push(inputobj);
    
    // localStorage.setItem(title, JSON.stringify(arr));
    // renderAddedTask(inputobj,ul)
    renderTasks(arr);
    return inputobj;
}