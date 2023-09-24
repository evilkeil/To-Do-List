import './assets/style.css';


const projectContainer = document.querySelector('[data-projectList]');

let projectList = ["studes","sports","Javascript"];

{/* <li class="project">Sports</li> */}

function renderProjectList(){
    clearList(projectList);
    projectList.forEach(project =>{
        const li = document.createElement('li');
        li.classList.add('project');
        li.innerText=project;
        projectContainer.appendChild(li);
        
    })

}

function clearList(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

renderProjectList();