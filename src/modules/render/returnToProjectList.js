import { addProjectBtnContainer, CardList, mainContainer, taskContainer, taskList } from "../cache/domElements";



export default function returnToProjectList(arr){
   
      console.log(arr)
      taskContainer.style.display = 'none';
      CardList.style.display = 'grid';
      addProjectBtnContainer.style.display = 'flex';
      arr.splice(0, arr.length); 
      const list = document.querySelectorAll('.task-list li');

      list.forEach(element =>{
         taskList.removeChild(element);
      })
     
   
}

// export default function returnToProjectList(target,arr){
//    console.log(target)
//    if (target.classList.contains('return') ){
//       taskContainer.style.display = 'none';
//       CardList.style.display = 'grid';
//       addProjectBtnContainer.style.display = 'flex';
//       arr.splice(0, arr.length); 
//       const list = document.querySelectorAll('.task-list li');

//       list.forEach(element =>{
//          taskList.removeChild(element);
//       })
     
//    }
// }