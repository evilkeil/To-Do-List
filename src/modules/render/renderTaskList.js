import { taskContainer } from "../cache/domElements";

export default function renderTasks(arr){
    arr.forEach(element => {
        const li = document.createElement('li');
        li.classList.add('task');
        const p = document.createElement('p');
        p.textContent=element;
        li.appendChild(p);
        li.appendChild(taskContainer);
    });
}