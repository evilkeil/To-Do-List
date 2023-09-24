import { taskList } from "../cache/domElements";
import clearList from "./clearList";

export default function renderTaskList(obj){
    clearList(taskList);
    const tasks = obj.tasks;
    tasks.forEach(task => {
        
    });
}