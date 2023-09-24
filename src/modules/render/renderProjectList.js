import { projectContainer } from "../cache/domElements";
import clearList from "./clearList";

export default function renderProjectList(array){
    clearList(projectContainer);
    array.forEach(arr =>{
        const li = document.createElement('li');
        li.classList.add('project');
        li.innerText=arr.name;
        projectContainer.appendChild(li);
        
    })

}