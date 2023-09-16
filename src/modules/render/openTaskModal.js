import { addTaskModal } from "../cache/domElements";

export default function openTaskModal(target){
    if(target.classList.contains('add-task-btn')){
        addTaskModal.showModal();
    }
}