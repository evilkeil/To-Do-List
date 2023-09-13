

export default function taskTitleComponent(title){
    const h1=document.createElement('h1');
    h1.textContent=title;
    
    const taskContainer = document.getElementById("task-container");
    taskContainer.appendChild(h1);
}