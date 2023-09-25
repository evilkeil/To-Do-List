import { taskForm, taskInput } from "../cache/domElements";
import { PROJECT_KEY, PROJECT_SELECTED_KEY } from "../cache/storageKeys";
import createTask from "../factoryFunctions/createTask";
import render from "../render/render";
import GetStorageItems from "../storage/getStorage";
import setStorageItem from "../storage/setStorage";

export default function addTask(){
    
    taskForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        const arr = GetStorageItems(PROJECT_KEY);
        const selected =GetStorageItems(PROJECT_SELECTED_KEY);
        const value = taskInput.value;
    if (value === null || value === undefined) return;
        const task = createTask(value);
        arr.forEach(element => {
            if (element.id === selected){
               element.tasks.push(task);
               
                
            }
        });
       setStorageItem(PROJECT_KEY,arr);
       render(arr,selected);
        taskForm.reset();
    })
}