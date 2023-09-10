import removeFromArray from "./removeFromArray";
import RemoveProject from "./deleteProject";
const modal = document.querySelector('.delete-modal');

export default function deleteProjectConfirm(arr,e){
    const yes = document.getElementById('yes');
    const no = document.getElementById('no');

    yes.addEventListener('click',function(event){
        event.preventDefault();
        const target = e.target;
        const card = target.closest('.card');
        const h2 = card.querySelector('.project-title');
        const title =  h2.textContent;
        const uniqueIdentifier = card.dataset.uid;
        RemoveProject(card,uniqueIdentifier);
        // removeFromArray(arr,title,uniqueIdentifier)
        modal.close();

    })

    no.addEventListener('click',function(event){
        event.preventDefault();
        modal.close();
    })
}