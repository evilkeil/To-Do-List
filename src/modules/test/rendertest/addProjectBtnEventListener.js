import { openbtn,modalAddProject } from "../cache/domElements";
import resetAddProjectForm from "../formControl/addProjectFormReset";
import submitNewProject from "../formControl/submitNewProject";

export default function addProjectBtn(arr){
    openbtn.addEventListener('click',(e)=>{
        modalAddProject.showModal();
        resetAddProjectForm();
        submitNewProject(arr)
    })
}