import { projectForm, projectInput } from "../cache/domElements";
import { PROJECT_KEY, PROJECT_SELECTED_KEY } from "../cache/storageKeys";
import createProject from "../factoryFunctions/createProject";
import renderProjectList from "../render/renderProjectList";
import setStorageItem from "../storage/setStorage";

export default function addProject(arr,selected){
    projectForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(projectInput.value === null ||projectInput.value === "" ) return;
        const newProject = createProject(projectInput.value);
        arr.push(newProject);
        setStorageItem(PROJECT_KEY,arr);
        selected = newProject.id;
        setStorageItem(PROJECT_SELECTED_KEY,selected);
        renderProjectList(arr,selected);
        projectForm.reset()
    
        
    
    })
}