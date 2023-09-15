export default function renderTaskCompleted(target,tasklist,title){
    if (target.classList.contains('task')){
        target.classList.toggle('done');
    const p = target.querySelector('p');;
    const text = p.textContent;
    const foundItem = tasklist.find(task => task.task === text);
    if (foundItem) {
        // Toggle the status between "task" and "done"
        foundItem.status = foundItem.status === "task" ? "done" : "task";
        localStorage.setItem(title, JSON.stringify(tasklist));
    }
    
}
}