import { addTaskModal } from "../cache/domElements";
import closeTaskModal from "../formControl/taskForm/closeTaskModal";
import resetTaskForm from "../formControl/taskForm/resetTaskForm";
import submitTask from "../formControl/taskForm/submitTask";

export default function openTaskModal(target,arr,title){
    if(target.classList.contains('add-task-btn')){
        addTaskModal.showModal();
        closeTaskModal();
        resetTaskForm();
        submitTask(arr,title);
    }
}