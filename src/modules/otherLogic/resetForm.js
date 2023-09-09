//event listner to the reset btn to reset the project form if clicked

const resetButton = document.querySelector('button[type="reset"]');
const form = document.getElementById('add-new-Project');

export default function resetNewProjectForm(){
    resetButton.addEventListener('click',function(e){
        e.preventDefault();
        form.reset();
    })
}