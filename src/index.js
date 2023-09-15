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

     // let tasks = [{task:"programming",status:"task"},{task:"Front-End",status:"task"},{task:"Back-end",status:"task"},{task:"Reading",status:"task"}];

     // localStorage.setItem("studies", JSON.stringify(tasks));
    onPageLoad(projectList,u);

    // addProjectBtn(projectList,u)

    // deleteProjectBtn(projectList,u)




