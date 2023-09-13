import './assets/style.css';

//newer

// import onPageLoad from './modules/test/rendertest/pageload';
import onPageLoad from './modules/render/pageload.js';
// import addProjectBtn from './modules/render/addProjectBtnEventListener';
import addProjectBtn from './modules/render/addProjectBtnEventListener.js'
// import deleteProjectBtn from './modules/test/rendertest/deleteProjectEventListerner';
import deleteProjectBtn from './modules/render/deleteProjectEventListerner';
import countItemsWithKeyName from './modules/storage/countItems';

     let projectList =[];
     let u;

     // localStorage.setItem("studies", JSON.stringify("programming"));
    onPageLoad(projectList,u);

    // addProjectBtn(projectList,u)

    // deleteProjectBtn(projectList,u)




