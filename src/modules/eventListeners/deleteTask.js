import { deleteTaskBtn } from "../cache/domElements";
import { PROJECT_KEY, PROJECT_SELECTED_KEY } from "../cache/storageKeys";
import render from "../render/render";
import GetStorageItems from "../storage/getStorage";
import setStorageItem from "../storage/setStorage";

export default function deleteCompletedTasks(){
   
    deleteTaskBtn.addEventListener('click',(e)=>{
        const arr = GetStorageItems(PROJECT_KEY);
        const selected = GetStorageItems(PROJECT_SELECTED_KEY);
        arr.forEach(element => {
            if(element.id === selected){
               let tasklist = element.tasks;
               
                const updatedTaskList = tasklist.filter(task =>{
                    return !task.complete;
                })
                element.tasks = updatedTaskList;
                setStorageItem(PROJECT_KEY,arr);
                render(arr,selected);
            }
        });
        
        
    })

}