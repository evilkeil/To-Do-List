import { resetButton,addProjectForm } from "../cache/domElements";

export default function resetAddProjectForm(){
    resetButton.addEventListener('click',(e)=>{
        e.preventDefault();
        addProjectForm.reset();
    })
}