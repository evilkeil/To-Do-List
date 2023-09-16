import { CardList, mainContainer, taskContainer } from "../cache/domElements";



export default function returnToProjectList(target){
   if (target.classList.contains('return') ){
      taskContainer.style.display = 'none';
      CardList.style.display = 'grid';
      // mainContainer.removeChild(taskContainer);
      // mainContainer.appendChild(CardList);
      //   mainContainer.removeChild(taskContainer);
      //   mainContainer.appendChild(CardList);
   }
}