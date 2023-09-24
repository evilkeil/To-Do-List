import './assets/style.css';


const projectContainer = document.querySelector('[data-projectList]');
const projectForm = document.querySelector('[data-addProjectForm]');
const projectInput =document.querySelector('[data-project-input]');

let projectList = [];

{/* <li class="project">Sports</li> */}

function renderProjectList(){
    clearList(projectList);
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