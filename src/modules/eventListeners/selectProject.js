import { projectContainer } from "../cache/domElements";
import { PROJECT_KEY, PROJECT_SELECTED_KEY } from "../cache/storageKeys";
import renderProjectList from "../render/renderProjectList";
import renderTaskContainer from "../render/renderTaskContainer";
import GetStorageItems from "../storage/getStorage";
import setStorageItem from "../storage/setStorage";

export default function selectProject(arr,selected){
   projectContainer.addEventListener('click',(e)=>{
    if(e.target.tagName.toLowerCase() === 'li'){
        selected = e.target.dataset.listid;
        arr = GetStorageItems(PROJECT_KEY);
        renderProjectList(arr,selected);
        setStorageItem(PROJECT_SELECTED_KEY,selected);
        renderTaskContainer(arr,selected);
    }
   })
}