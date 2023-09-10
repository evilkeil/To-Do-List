//functionality for the project delete btns
import deleteProjectConfirm from "../otherLogic/deleteProjectForm";


const container = document.getElementById('main-container');
const modal = document.querySelector('.delete-modal');

export default function deleteProject(){
    container.addEventListener('click',function(e){
        modal.showModal();
      const div= e.target.closest('.card');
        console.log(div)
       
    })
}






// const deleteBtn = document.querySelectorAll('.delete-project' );
// const modal = document.querySelector('.delete-modal');
// const container = document.getElementById('main-container');

// // export default function deleteProject(){
// //     Array.from(deleteBtn).forEach(function(element) {
// //         element.addEventListener('click'),function(e){
// //             modal.showModal();
            
// //         }
// //     });
// // }

// export default function deleteProject(arr){
//     container.addEventListener('click', function (e) {
//         if (e.target.classList.contains('delete-project')) {
//             modal.showModal();
//             deleteProjectConfirm(arr);
//         }
//     });
// }