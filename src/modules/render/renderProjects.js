import createSvgComponent from "./deleteProjectSVG";

export default function renderProjects(arr){
    const mainContainer = document.getElementById('main-container');
    arr.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-UID', `${element.UID}`);

        //marker
        const marker = document.createElement('div');
        marker.classList.add('card-marker');
        marker.style.cssText = `background-color: ${element.marker};`
        card.appendChild(marker);

        //svg
        card.appendChild(createSvgComponent());
        //title
        const title = document.createElement('h2');
        title.textContent=`${element.title}`;
        title.classList.add('project-title');
        card.appendChild(title);

        //time
        const time = document.createElement('p');
        time.classList.add('time');
        time.textContent = `${element.date}`;
        card.appendChild(time);


        mainContainer.appendChild(card)
    });

    
}