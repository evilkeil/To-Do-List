

export default function renderTasks(arr,container){
    const ul = document.createElement('ul');
    ul.classList.add('task-list');
    if (arr.length === 0){
        return
    }
    arr.forEach(element => {
        
        const li = document.createElement('li');
        li.classList.add('task');
        const p = document.createElement('p');
        p.textContent=element;
        li.appendChild(p);
        ul.appendChild(li)
        
    });
    container.appendChild(ul);
}