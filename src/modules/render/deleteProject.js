//functionality for the project delete btns
import deleteProjectConfirm from "../otherLogic/deleteProjectForm";


export default function deleteProject(arr) {
    // Get all the SVG elements with class 'delete-project' (assuming there are multiple)
const deleteBtns = document.querySelectorAll('.delete-project-btn');

// Attach click event listeners to each SVG element
deleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', function (e) {

        const modal = document.querySelector('.delete-modal');
        modal.showModal();
        // deleteProjectConfirm(arr,e);
    });
});
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