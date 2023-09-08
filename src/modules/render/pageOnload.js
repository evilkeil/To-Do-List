//to check whther theres any projects created by the user in a prev session

import checkStorage from "../storage/checkStorage";

export default function OnPageLoad(){
    document.addEventListener('DOMContentLoaded',function(){
        const items = checkStorage();
        
    })
}