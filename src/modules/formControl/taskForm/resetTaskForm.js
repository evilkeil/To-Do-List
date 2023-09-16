import { addTaskForm, addTaskFormResetBtn } from "../../cache/domElements";

export default function resetTaskForm(){
    addTaskFormResetBtn.addEventListener('click',function(e){
        e.preventDefault();
        addTaskForm.reset();
    })
}