import { addTaskForm, addTaskModal } from "../../cache/domElements";
import addTask from "./addTask";

export default function submitTask(arr,title){
    addTaskForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        addTask(arr,title);
        addTaskForm.reset();
        addTaskModal.close();
    })
}