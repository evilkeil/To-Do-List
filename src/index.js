import './assets/style.css';
import GetStorageItems from "./modules/storage/getStorage.js";
import setStorageItem from "./modules/storage/setStorage.js";
import DeleteStorageItem from "./modules/storage/deleteStorageItems.js";
import checkStorage from "./modules/storage/countItems.js";
import createProject from './modules/otherLogic/projectObj';
import OnPageLoad from './modules/render/pageOnload';
import getItemsFromStorage from './modules/storage/getItemsFromStorage';
import ShowProjectAddModal from './modules/render/showAddProjModal';
import deleteProject from './modules/render/deleteProjectEvent';
import countItemsWithKeyName from './modules/storage/countItems.js';

//newer

import onPageLoad from './modules/test/rendertest/pageload';
import renderProjectList from './modules/test/rendertest/renderProjectList';
import addProjectBtn from './modules/test/rendertest/addProjectBtnEventListener';


     let projectList =[];
 
    onPageLoad(projectList);

    addProjectBtn(projectList)







// OnPageLoad(projectList,"project");

// ShowProjectAddModal(projectList,"project")
// deleteProject(projectList);

// console.log(projectList);
 


