import { CardList, mainContainer } from "../cache/domElements";



export default function returnToProjectList(target){
   if (target.classList.contains('return') ){
      const taskContainer = document.querySelector('.task-container');
      console.log(taskContainer)
      //   mainContainer.removeChild(taskContainer);
      //   mainContainer.appendChild(CardList);
   }
}