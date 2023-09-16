import { CardList, mainContainer } from "../../cache/domElements";

export default function removeProjectsAndAppendTasks(){
    const container = document.getElementById("task-container");
    container.style.display = 'flex';

    CardList.style.display = 'none';
    
}