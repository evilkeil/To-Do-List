import { CardList, mainContainer } from "../../cache/domElements";

export default function removeProjectsAndAppendTasks(){
    const container = document.createElement('div');
    container.setAttribute('id', "task-container");
    container.classList.add('task-container');

    mainContainer.removeChild(CardList);
    mainContainer.appendChild(container);
}