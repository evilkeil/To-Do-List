import addProject from "./addproject";
import addTask from "./addTasks";
import deleteProject from "./deleteProject";
import deleteCompletedTasks from "./deleteTask";
import markTask from "./markTasks";
import selectProject from "./selectProject";

export default function attachEventListners(arr,selected){
    addProject(arr,selected);
    selectProject(arr,selected);
    addTask();
    markTask();
    deleteProject();
    deleteCompletedTasks();
}