//render the latest created project
 import createSvgComponent from "./deleteProjectSVG";


export default function renderNewProject(name,mark,date,UID){
    const mainContainer = document.getElementById('main-container');
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-UID', UID);
        //marker
        const marker = document.createElement('div');
        marker.classList.add('card-marker');
        marker.style.cssText = `background-color: ${mark};`
        card.appendChild(marker);

        //title
        const title = document.createElement('h2');
        title.textContent=`${name}`;
        title.classList.add('project-title');
        card.appendChild(title);
        
         //svg
         card.appendChild(createSvgComponent());

        //time
        const time = document.createElement('p');
        time.classList.add('time');
        time.textContent = `${date}`;
        card.appendChild(time);

        mainContainer.appendChild(card)
   
    
}