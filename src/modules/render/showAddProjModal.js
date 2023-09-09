//event listner to the add project btn
import getNewProjectInfo from '../otherLogic/addProjForm.js';
import closeModal from '../render/closeModal.js'
import resetNewProjectForm from '../otherLogic/resetForm.js';

const openbtn = document.getElementById('add-Project');
const modal = document.getElementById('modal');


export default function ShowProjectAddModal(arr,keyPrefix){
    openbtn.addEventListener('click',function(e){
        modal.showModal();
        resetNewProjectForm();
        getNewProjectInfo(arr,keyPrefix);
    })
    closeModal()
}