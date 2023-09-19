import { projectTitleInput,markerInput, } from "../cache/domElements";
import createProjectObj from "../../../otherLogic/projectObj";
// import renderProjectList from "../rendertest/renderProjectList";
import renderProjectList from "../render/renderProjectList";
import countItemsWithKeyName from "../../../storage/countItems";
import setStorageItem from "../../../storage/setStorage";

export default function createNewProject(arr,n){
    const title = projectTitleInput.value; //to be stored
    const marker = markerInput.value; //to be stored
    
    if (!title || !marker) {
        // if user didnt include a titel or a marker
        return;
      }

      const currentDate = new Date();
      const date = currentDate.toISOString().split('T')[0];  //to be stored
      const storageLength = countItemsWithKeyName("project");
      // const UID = storageLength + 1;; // temp 
      
      const projectInfo = createProjectObj(title, marker, date,n);
      setStorageItem(`project${n}`, projectInfo); //add to storage for later sessions;
     
      arr.push(projectInfo); //push it into the projects list array
      renderProjectList(arr); //render it
      n++;
      setStorageItem("number", n);
}