import { addTaskModal } from "../cache/domElements";
import closeTaskModal from "../formControl/taskForm/closeTaskModal";
import resetTaskForm from "../formControl/taskForm/resetTaskForm";
import submitTask from "../formControl/taskForm/submitTask";

// export default function openTaskModal(arr,title){
//         if (!addTaskModal.hasAttribute('open')) {
//             addTaskModal.showModal();
//         }
//         closeTaskModal();
//         resetTaskForm();
//         submitTask(arr,title);
    
// }


export default function openTaskModal(arr,title){
   
        if (!addTaskModal.hasAttribute('open')) {
            addTaskModal.showModal();
        }
        closeTaskModal();
        resetTaskForm();
        submitTask(arr,title);
    
}