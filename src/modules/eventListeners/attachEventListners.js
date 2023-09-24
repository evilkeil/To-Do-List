import addProject from "./addproject";
import deleteProject from "./deleteProject";
import selectProject from "./selectProject";

export default function attachEventListners(arr,selected){
    addProject(arr,selected);
    selectProject(arr,selected);
    deleteProject();
}