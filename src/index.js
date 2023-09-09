import './assets/style.css';
import GetStorageItems from "./modules/storage/getStorage.js";
import setStorageItem from "./modules/storage/setStorage.js";
import DeleteStorageItem from "./modules/storage/deleteStorageItems.js";
import checkStorage from "./modules/storage/countItems.js";
import createProject from './modules/otherLogic/projectObj';
import OnPageLoad from './modules/render/pageOnload';
import getItemsFromStorage from './modules/storage/getItemsFromStorage';
import ShowProjectAddModal from './modules/render/showAddProjModal';




const projects = function(){
    let projectList =[];

    return{
        projectList
    }
}();

let k = projects.projectList;

getItemsFromStorage(k,"project")
console.log(k);
OnPageLoad(k,"project");

ShowProjectAddModal(k,"project")



 


