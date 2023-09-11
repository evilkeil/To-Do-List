import { submitButton,addProjectForm,modalAddProject } from "../cache/domElements";
import createNewProject from "./formInputControl";
// import removeEmptyMessage from "../rendertest/removeEmptymsg";
import removeEmptyMessage from "../render/removeEmptymsg";

export default function submitNewProject(arr){
    addProjectForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        createNewProject(arr);
        removeEmptyMessage();
        modalAddProject.close();
        addProjectForm.reset();
        

    })
}