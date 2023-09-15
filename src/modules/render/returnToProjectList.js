import { CardList, mainContainer } from "../cache/domElements";



export default function returnToProjectList(target){
   if (target.classList.contains('return') ){
      const taskContainer = document.querySelector('.task-container');
      mainContainer.removeChild(taskContainer);
      mainContainer.appendChild(CardList);
      //   mainContainer.removeChild(taskContainer);
      //   mainContainer.appendChild(CardList);
   }
}