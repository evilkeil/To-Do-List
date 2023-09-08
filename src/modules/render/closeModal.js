//module to handle the close btn .close

const close =document.querySelector('.close svg');
const modal = document.getElementById('modal');

export default function closeModal(){
    close.addEventListener(`click`,function(){
        modal.close();
    })
}