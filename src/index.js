import './assets/style.css';

//newer

// import onPageLoad from './modules/test/rendertest/pageload';
import onPageLoad from './modules/render/pageload.js';
// import addProjectBtn from './modules/render/addProjectBtnEventListener';
import addProjectBtn from './modules/render/addProjectBtnEventListener.js'
// import deleteProjectBtn from './modules/test/rendertest/deleteProjectEventListerner';
import deleteProjectBtn from './modules/render/deleteProjectEventListerner';


     let projectList =[];
 
    onPageLoad(projectList);

    addProjectBtn(projectList)

    deleteProjectBtn(projectList)




