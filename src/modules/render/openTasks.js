
import removeProjectsAndAppendTasks from "../components/taskListRelatedComponents/removeProjectsAppendTasks";
import retriveTasks from "../components/taskListRelatedComponents/retriveTasks";
import renderTasks from "./renderTaskList";
import taskTitleComponent from "../components/taskListRelatedComponents/taskTitleComponent";
import deleteBtnSVG from "../components/deleteBtnComponent";
import addTaskBtn from "../components/taskListRelatedComponents/addTaskBtnComponent";
import returnToProjectList from "./returnToProjectList";
import renderTaskCompleted from "./renderTaskCompleted";
import openTaskModal from "./openTaskModal";


export default function openTaskList(target,uid,title){
    const isDeleteBtn = target.querySelector('.delete-project-btn');
    if (target.classList.contains('card') && !(target === isDeleteBtn)){
        removeProjectsAndAppendTasks();
        const taskContainer = taskTitleComponent(title);
       
        const taskList = retriveTasks(title);
        console.log(taskList);
        renderTasks(taskList);
        taskContainer.appendChild(deleteBtnSVG("return"));
        taskContainer.appendChild(addTaskBtn());
        // console.log(title)

        taskContainer.addEventListener('click',(e)=>{
           const  titleElem =  taskContainer.querySelector('h1');
           const title = titleElem.textContent;
           console.log(title);
          
            const target = e.target;
            console.log("targrt is" + target)
            if(target.classList.contains('return')){
                returnToProjectList(taskList);
            }
            // returnToProjectList(target,taskList);
            if(target.classList.contains('add-task-btn')){
                openTaskModal(taskList,title);
            }
            renderTaskCompleted(target,taskList,title);
            
            
            
        })
       
          }
        
    }
    
