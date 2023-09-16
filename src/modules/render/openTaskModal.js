import { addTaskModal } from "../cache/domElements";
import closeTaskModal from "../formControl/taskForm/closeTaskModal";
import resetTaskForm from "../formControl/taskForm/resetTaskForm";

export default function openTaskModal(target){
    if(target.classList.contains('add-task-btn')){
        addTaskModal.showModal();
        closeTaskModal();
        resetTaskForm();
    }
}