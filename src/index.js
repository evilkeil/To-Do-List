import './assets/style.css';
import { PROJECT_KEY, PROJECT_SELECTED_KEY } from './modules/cache/storageKeys';
import attachEventListners from './modules/eventListeners/attachEventListners';
import render from './modules/render/render';
import GetStorageItems from './modules/storage/getStorage';






let projectList = GetStorageItems(PROJECT_KEY) || [];
let selectedProject = GetStorageItems(PROJECT_SELECTED_KEY);



attachEventListners(projectList,selectedProject);
render(projectList,selectedProject);