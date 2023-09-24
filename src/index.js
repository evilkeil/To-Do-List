import './assets/style.css';
import GetStorageItems from './modules/storage/getStorage';
import setStorageItem from './modules/storage/setStorage';


const projectContainer = document.querySelector('[data-projectList]');
const projectForm = document.querySelector('[data-addProjectForm]');
const projectInput =document.querySelector('[data-project-input]');

const PROJECT_KEY = "todo.projectlist";

let projectList = GetStorageItems(PROJECT_KEY) || [];



function renderProjectList(){
    clearList(projectContainer);
    projectList.forEach(project =>{
        const li = document.createElement('li');
        li.classList.add('project');
        li.innerText=project.name;
        projectContainer.appendChild(li);
        
    })

}

function clearList(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

projectForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(projectInput.value === null ||projectInput.value === "" ) return;
    const newProject = createProject(projectInput.value);
    projectList.push(newProject);
    setStorageItem(PROJECT_KEY,projectList);
    renderProjectList()
    projectForm.reset()

    

})

function createProject(name){
    return {
        name:name,
        id:Date.now().toString(),
        tasks:[],
    }
}
renderProjectList();