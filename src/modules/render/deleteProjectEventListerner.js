import { CardList ,deleteModal} from "../cache/domElements";
import deleteModalInputs from "../deleteBtnLogic/deleteModalInputs";

export default function deleteProjectBtn(arr,n){
    CardList.addEventListener('click',(e)=>{
        const target = e.target;
        const svgPath = document.querySelector('delete-project-btn path')
       if (target.classList.contains('delete-project-btn')|| svgPath ){
            const closestLi = target.closest('li');
            const index = Array.from(CardList.children).indexOf(closestLi);
            const uid = closestLi.getAttribute('data-uid')
            deleteModal.showModal();
            deleteModalInputs(arr,index,uid,n);
            
       }
    })
}