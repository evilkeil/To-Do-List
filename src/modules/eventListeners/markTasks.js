import { taskList } from "../cache/domElements";
import { PROJECT_KEY, PROJECT_SELECTED_KEY } from "../cache/storageKeys";
import render from "../render/render";
import GetStorageItems from "../storage/getStorage";
import setStorageItem from "../storage/setStorage";

export default function markTask(){
    taskList.addEventListener('click',(e)=>{
        if(e.target.tagName.toLowerCase() === 'input'){
            const arr = GetStorageItems(PROJECT_KEY);
            const selected = GetStorageItems(PROJECT_SELECTED_KEY);

            const currentProject = arr.find(element => element.id === selected);
            const clickedTask = currentProject.tasks.find(task => task.id === e.target.id);
            if (clickedTask.complete === true){
                clickedTask.complete = false;
                setStorageItem(PROJECT_KEY,arr);
                render(arr,selected);
            }else{
                clickedTask.complete = true;
                setStorageItem(PROJECT_KEY,arr);
                render(arr,selected);
            }
        }
    })
}