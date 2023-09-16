import { addTaskModal } from "../cache/domElements";
import closeTaskModal from "../formControl/taskForm/closeTaskModal";

export default function openTaskModal(target){
    if(target.classList.contains('add-task-btn')){
        addTaskModal.showModal();
        closeTaskModal();
    }
}