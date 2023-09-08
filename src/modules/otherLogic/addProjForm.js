//to handle submit event listener of the modal

import createProject from './projectObj'
const projectTitleInput = document.getElementById('title');
const markerInput = document.getElementById('color');
const form = document.getElementById('add-new-Project');
const modal = document.getElementById('modal');




export default function getNewProjectInfo() {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = projectTitleInput.value;
        const marker = markerInput.value;
        const currentDate = new Date();
        const date = currentDate.toISOString().split('T')[0];
        form.reset();
        modal.close();

       
        const projectInfo = createProject(title,marker,date);


        return projectInfo;
    });
}