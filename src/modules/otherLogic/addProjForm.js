//to handle submit event listener of the modal
import createProject from './projectObj';
import countItemsWithKeyName from '../storage/countItems';
import setStorageItem from '../storage/setStorage.js';
import getItemsFromStorage from '../storage/getItemsFromStorage';
import renderNewProject from '../render/renderNewProject';


const projectTitleInput = document.getElementById('title');
const markerInput = document.getElementById('color');
const form = document.getElementById('add-new-Project');
const modal = document.getElementById('modal');

function createAndStoreProject() {
  const title = projectTitleInput.value;
  const marker = markerInput.value;
  const currentDate = new Date();
  const date = currentDate.toISOString().split('T')[0];


  const projectInfo = createProject(title, marker, date);
  const storageLength = countItemsWithKeyName("project");
  const projectNumber = storageLength + 1;

  setStorageItem(`project${projectNumber}`, projectInfo);
  renderNewProject(title,marker,date);

  return projectInfo;
}

export default function getNewProjectInfo(arr,keyPrefix) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    createAndStoreProject();
    modal.close();

  });
}