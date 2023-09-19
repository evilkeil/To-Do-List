//module to handle the close btn .close

import { closeSVG,modalAddProject } from "../cache/domElements";


export default function closeAddProjectModal(){
    closeSVG.addEventListener(`click`,function(){
        modalAddProject.close();
    })
}