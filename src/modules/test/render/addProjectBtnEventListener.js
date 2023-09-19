// import { openbtn,modalAddProject } from "../cache/domElements";
import { openbtn,modalAddProject } from "../cache/domElements";
import resetAddProjectForm from "../formControl/addProjectFormReset";
import submitNewProject from "../formControl/submitNewProject";
import closeAddProjectModal from "./closeModal";

export default function addProjectBtn(arr,n){
    openbtn.addEventListener('click',(e)=>{
        modalAddProject.showModal();
        closeAddProjectModal();
        resetAddProjectForm();
        submitNewProject(arr,n);
    })
}