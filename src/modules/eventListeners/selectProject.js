import { projectContainer } from "../cache/domElements";
import renderProjectList from "../render/renderProjectList";

export default function selectProject(arr,selected){
   projectContainer.addEventListener('click',(e)=>{
    if(e.target.tagName.toLowerCase() === 'li'){
        selected = e.target.dataset.listid;
        renderProjectList(arr,selected)
        console.log(selected)
    }
   })
}