//main elements

export const mainContainer = document.getElementById('main-container');// the main container
export const CardList = document.getElementById('cardUL'); //the ul containing the cards
 

//capture elements related to the add project modals imput fields

export const openbtn = document.getElementById('add-Project'); //the button to open the add project modal
export const modalAddProject = document.getElementById('modal'); //the add project modal
export const resetButton = document.querySelector('button[type="reset"]');  //the button to reset the add project modal
export const addProjectForm = document.getElementById('add-new-Project'); //the addproject modal form
export const projectTitleInput = document.getElementById('title');
export const markerInput = document.getElementById('color');
export const submitButton = document.getElementById('submitProj');
export const closeSVG =document.querySelector('.close svg');//the close btn in the add project modal
export const addProjectBtnContainer = document.querySelector('.add-project-container');


//delete projects related elements

export const deleteModal = document.querySelector('.delete-modal');
export const yes = document.getElementById('yes');
export const no = document.getElementById('no');


//task list related elements

export const taskContainer= document.querySelector('.task-container'); //container of the tasks
export const addTaskModal = document.getElementById('add-task-modal'); //the modal for adding tasks
export const addTaskSubmitBtn = document.getElementById('submit-task-btn'); //submit button for the add task form
export const addTaskForm = document.getElementById('task-form'); // the add task form
export const addTaskFormResetBtn = document.getElementById('reset-task-btn'); // button to reset the inputs of the add task form
export const closeTaskBtn = document.getElementById('close-task-btn'); // button to close the add task modal
export const addTaskInput = document.getElementById('add-task'); //the add task input
export const taskList = document.querySelector('.task-list');
