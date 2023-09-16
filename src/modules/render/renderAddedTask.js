import { taskContainer } from "../cache/domElements";

export default function renderAddedTask(obj,ul){
    
    const li = document.createElement('li');
    li.classList.add("task");
    li.classList.add(obj.status);
    const p = document.createElement('p');
    p.textContent=obj.task;
    li.appendChild(p);

    console.log(taskContainer)
}