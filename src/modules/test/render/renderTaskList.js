
export default function renderTasks(arr) {
    const ul = document.querySelector('.task-list');
    // console.log((Array.isArray(arr)));
    console.log(arr)
    if (arr === null) {
        return;
    }
    if(arr.length === 0){
        return
    }

    arr.forEach((element, index) => {
        const status = element.status;
        const li = document.createElement('li');
        li.classList.add("task");
        li.classList.add(status);
        li.setAttribute('data-number', index);
        const p = document.createElement('p');
        p.textContent = element.task;
        li.appendChild(p);

        const taskExists = document.querySelector(`[data-number="${index}"]`);
        if (!taskExists) {
            ul.appendChild(li); // Only add the new task if it doesn't exist in the list
        }
    });

    
  
}




// export default function renderTasks(arr,container){
//     const ul = document.querySelector('.task-list')
//     if (arr.length === 0){
//         return
//     }
//     arr.forEach((element,index) => {
//         const status = element.status;
//         const li = document.createElement('li');
//         li.classList.add("task");
//         li.classList.add(status);
//         li.setAttribute('data-number', index);
//         const p = document.createElement('p');
//         p.textContent=element.task;
//         li.appendChild(p);
//         ul.appendChild(li)
        
//     });
//     container.appendChild(ul);
//     return ul;
// }