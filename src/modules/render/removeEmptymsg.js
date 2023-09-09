import countItemsWithKeyName from "../storage/countItems";

const container= document.getElementById('main-container');



export default function removeEmptyMessage(){
    if (container.classList.contains('center-grid')){

        const emptymsg = document.querySelector('.empty');
        
        container.classList.remove('center-grid');
        container.removeChild(emptymsg);
       }
}
