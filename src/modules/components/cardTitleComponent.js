export default function cardTitleComponent(name){
    const title = document.createElement('h2');
    title.textContent=`${name}`;
    title.classList.add('project-title');
    return title;
}
