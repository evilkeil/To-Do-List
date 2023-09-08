//to handle submit event listener of the modal
import createProject from './projectObj';
import checkStorage from '../storage/checkStorage.js';
import setStorageItem from '../storage/setStorage.js';

const projectTitleInput = document.getElementById('title');
const markerInput = document.getElementById('color');
const form = document.getElementById('add-new-Project');
const modal = document.getElementById('modal');

function createAndStoreProject() {
  const title = projectTitleInput.value;
  const marker = markerInput.value;
  const currentDate = new Date();
  const date = currentDate.toISOString().split('T')[0];
  form.reset();
  modal.close();

  const projectInfo = createProject(title, marker, date);
  const storageLength = checkStorage();
  const projectNumber = storageLength + 1;

  setStorageItem(`project${projectNumber}`, projectInfo);

  return projectInfo;
}

export default function getNewProjectInfo() {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    createAndStoreProject();
  });
}