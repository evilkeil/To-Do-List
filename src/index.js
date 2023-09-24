import './assets/style.css';
import { PROJECT_KEY, PROJECT_SELECTED_KEY } from './modules/cache/storageKeys';
import attachEventListners from './modules/eventListeners/attachEventListners';
import renderProjectList from './modules/render/renderProjectList';
import renderTaskContainer from './modules/render/renderTaskContainer';
import GetStorageItems from './modules/storage/getStorage';






let projectList = GetStorageItems(PROJECT_KEY) || [];
let selectedProject = GetStorageItems(PROJECT_SELECTED_KEY);



attachEventListners(projectList,selectedProject);
renderProjectList(projectList,selectedProject);
renderTaskContainer(projectList,selectedProject);