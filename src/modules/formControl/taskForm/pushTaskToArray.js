import { addTaskInput } from "../../cache/domElements";
import renderAddedTask from "../../render/renderAddedTask";

export default function pushTaskToArray(arr,title){
    const input = addTaskInput.value;
    const inputobj = {
        task: input,
        status:'task',
    }
    arr.push(inputobj);
    localStorage.setItem(title, JSON.stringify(arr));
    renderAddedTask(inputobj)
}