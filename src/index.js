import './assets/style.css';
import GetStorageItems from "./modules/storage/getStorage.js";
import setStorageItem from "./modules/storage/setStorage.js";
import DeleteStorageItem from "./modules/storage/deleteStorageItems.js";
import checkStorage from "./modules/storage/checkStorage.js";
import createProject from './modules/otherLogic/projectObj';



const proj2 = createProject("dance","#3c7794","2023-09-08");

setStorageItem(`project2`, proj2);



let projectList =[]

  function getProjectsFromStorage(){
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
      
        // Check if the key starts with "project"
        if (key.startsWith("project")) {
            let p1=GetStorageItems(key);
            
          projectList.push(p1);
        }
      }
};
getProjectsFromStorage();
console.log(projectList)




