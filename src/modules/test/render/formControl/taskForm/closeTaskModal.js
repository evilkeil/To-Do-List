import { addTaskModal, closeTaskBtn } from "../../cache/domElements";

export default function closeTaskModal(){
    closeTaskBtn.addEventListener(`click`,function(){
        addTaskModal.close();
    })
}