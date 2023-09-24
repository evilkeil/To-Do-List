import { projectContainer } from "../cache/domElements";
import clearList from "./clearList";

export default function renderProjectList(array,selected){
    clearList(projectContainer);
    array.forEach(arr =>{
        const li = document.createElement('li');
        li.classList.add('project');
        li.innerText=arr.name;
        li.dataset.listid = arr.id;
        if(arr.id === selected){
            li.classList.add('active');
        }
        projectContainer.appendChild(li);
        
    })

}