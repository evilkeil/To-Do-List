import { projectContainer } from "../cache/domElements";
import { PROJECT_SELECTED_KEY } from "../cache/storageKeys";
import renderProjectList from "../render/renderProjectList";
import setStorageItem from "../storage/setStorage";

export default function selectProject(arr,selected){
   projectContainer.addEventListener('click',(e)=>{
    if(e.target.tagName.toLowerCase() === 'li'){
        selected = e.target.dataset.listid;
        renderProjectList(arr,selected)
        setStorageItem(PROJECT_SELECTED_KEY,selected);
        console.log(selected)
    }
   })
}