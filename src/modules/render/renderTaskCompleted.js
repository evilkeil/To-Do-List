export default function renderTaskCompleted(target){
    if (target.classList.contains('task')){
        target.classList.toggle('done');
    }
}