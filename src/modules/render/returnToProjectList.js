import { addProjectBtnContainer, CardList, mainContainer, taskContainer } from "../cache/domElements";



export default function returnToProjectList(target){
   if (target.classList.contains('return') ){
      taskContainer.style.display = 'none';
      CardList.style.display = 'grid';
      addProjectBtnContainer.style.display = 'flex';
     
   }
}