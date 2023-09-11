export default function cardDateComponent(date){
    const time = document.createElement('p');
    time.classList.add('time');
    time.textContent = `${date}`;
}