import { submitButton,addProjectForm,modalAddProject } from "../cache/domElements";
import createNewProject from "./formInputControl";

export default function submitNewProject(arr){
    addProjectForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        createNewProject(arr);
        // removeEmptyMessage();
        modalAddProject.close();
        addProjectForm.reset();
        

    })
}