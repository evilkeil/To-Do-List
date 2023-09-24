import './assets/style.css';
import { PROJECT_KEY } from './modules/cache/storageKeys';
import attachEventListners from './modules/eventListeners/attachEventListners';
import renderProjectList from './modules/render/renderProjectList';
import GetStorageItems from './modules/storage/getStorage';






let projectList = GetStorageItems(PROJECT_KEY) || [];



attachEventListners(projectList)
renderProjectList(projectList);