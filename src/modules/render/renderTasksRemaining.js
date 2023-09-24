import { taskRemaining } from "../cache/domElements";

export default function renderTasksRemaining(obj){
    const tasks = obj.tasks;
    const tasksIncomplete = tasks.filter(function(task){
        return task.complete === false;
    })
    const taskCount = tasksIncomplete.length;
    const grammar = taskCount === 1 ? "task" : "tasks";
    
    taskRemaining.innerText = `${taskCount} ${grammar} remaining`
}