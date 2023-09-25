import { taskList, template } from "../cache/domElements";
import clearList from "./clearList";

export default function renderTaskList(obj){
    clearList(taskList);
    const tasks = obj.tasks;
    tasks.forEach(task => {
       const taskElement = document.importNode(template.content,true);
        const input = taskElement.querySelector('input');
        input.id=task.id;
        input.checked = task.complete;
        const label = taskElement.querySelector('label');
        label.setAttribute('for',`${task.id}`);
        label.htmlFor = task.id;
        label.append(task.name);
       
        
        taskList.appendChild(taskElement);
        
    });
}

// <div class="task">
// <input type="checkbox" name="" id="task-2">
// <label for="task-2">
//     <span class="custom-checkbox"></span>
//     study React
// </label>
// </div>