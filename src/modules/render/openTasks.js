
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
        removeProjectsAndAppendTasks()
        const taskContainer = taskTitleComponent(title);
        const taskList = retriveTasks(title);
        renderTasks(taskList);
        taskContainer.appendChild(deleteBtnSVG("return"));
        taskContainer.appendChild(addTaskBtn());


        taskContainer.addEventListener('click',(e)=>{
            const target = e.target;
            returnToProjectList(target);
            renderTaskCompleted(target,taskList,title);
            openTaskModal(target,taskList,title);
            
        })
          }
    }
    
