//to handle submit event listener of the modal
import createProject from './projectObj';
import countItemsWithKeyName from '../storage/countItems';
import setStorageItem from '../storage/setStorage.js';
import getItemsFromStorage from '../storage/getItemsFromStorage';
import renderNewProject from '../render/renderNewProject.js';
import removeEmptyMessage from '../test/rendertest/removeEmptymsg';


const projectTitleInput = document.getElementById('title');
const markerInput = document.getElementById('color');
const form = document.getElementById('add-new-Project');
const modal = document.getElementById('modal');
const submitButton = document.getElementById('submitProj')

function createAndStoreProject(arr) {
  const title = projectTitleInput.value;
  const marker = markerInput.value;

  if (!title || !marker) {
    // You can display an error message or simply return without creating/storing the project
    return;
  }
  
  const currentDate = new Date();
  const date = currentDate.toISOString().split('T')[0];



  const storageLength = countItemsWithKeyName("project");
  const projectNumber = storageLength + 1;
  const UID = projectNumber;
  const projectInfo = createProject(title, marker, date,UID);
  setStorageItem(`project${UID}`, projectInfo);
  renderNewProject(title,marker,date,UID);
  arr.push(projectInfo);

  return projectInfo;
}

export default function getNewProjectInfo(arr) {
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    createAndStoreProject(arr);
    removeEmptyMessage();
    modal.close();
    form.reset();

  });
}