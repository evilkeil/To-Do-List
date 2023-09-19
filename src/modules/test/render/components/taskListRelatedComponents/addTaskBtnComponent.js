export default function addTaskBtn(){
   const btn =  document.createElement('button');
   btn.classList.add('add-task-btn');
   btn.textContent = 'ADD TASK';
   return btn;
}