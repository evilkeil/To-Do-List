//event listner to the add project btn

const openbtn = document.getElementById('add-Project');
const modal = document.getElementById('modal');



export default function ShowProjectAddModal(){
    openbtn.addEventListener('click',function(e){
        modal.showModal();
    })
}