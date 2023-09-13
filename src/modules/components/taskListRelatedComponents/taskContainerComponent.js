import { mainContainer } from "../../cache/domElements";

export default function taskContainerComponent(){
    const container = document.createElement('div');
    container.classList.add(task-container);;

    mainContainer.appendChild(container);
}