import addProject from "./addproject";
import selectProject from "./selectProject";

export default function attachEventListners(arr,selected){
    addProject(arr);
    selectProject(arr,selected)
}