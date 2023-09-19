import { addProjectBtnContainer, CardList, mainContainer } from "../../cache/domElements";

export default function removeProjectsAndAppendTasks(){
    const container = document.getElementById("task-container");
    container.style.display = 'flex';
    addProjectBtnContainer.style.display = 'none'

    CardList.style.display = 'none';
    
}