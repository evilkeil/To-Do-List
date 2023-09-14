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


//delete projects related elements

export const deleteModal = document.querySelector('.delete-modal');
export const yes = document.getElementById('yes');
export const no = document.getElementById('no');


//task list related elements

export const taskContainer= document.querySelector('.task-container')