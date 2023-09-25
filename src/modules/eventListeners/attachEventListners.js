import addProject from "./addproject";
import addTask from "./addTasks";
import deleteProject from "./deleteProject";
import selectProject from "./selectProject";

export default function attachEventListners(arr,selected){
    addProject(arr,selected);
    selectProject(arr,selected);
    addTask();
    deleteProject();
}