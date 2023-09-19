import { submitButton,addProjectForm,modalAddProject } from "../cache/domElements";
import createNewProject from "./formInputControl";
// import removeEmptyMessage from "../rendertest/removeEmptymsg";
import removeEmptyMessage from "../render/removeEmptymsg";
import setStorageItem from "../../../storage/setStorage";


export default function submitNewProject(arr,n){
    addProjectForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        createNewProject(arr,n);
        removeEmptyMessage();
        modalAddProject.close();
        addProjectForm.reset();
        
        console.log(n);
        
        n++;
        
        

    })
}