export default function renderAddedTask(obj){
    const li = document.createElement('li');
    li.classList.add("task");
    li.classList.add(obj.status);
    const p = document.createElement('p');
    p.textContent=obj.task;
    li.appendChild(p);

    const ul = document.querySelector('.task-list');
    ul.appendChild(li);
}