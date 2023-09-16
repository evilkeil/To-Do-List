

export default function taskTitleComponent(title){
    const h1=document.querySelector('#task-container h1')
    h1.textContent=title;
    
    const taskContainer = document.getElementById("task-container");
   
    return taskContainer;
}