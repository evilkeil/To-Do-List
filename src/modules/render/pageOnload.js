import checkStorage from "../storage/checkStorage";

export default function OnPageLoad(){
    document.addEventListener('DOMContentLoaded',function(){
        const items = checkStorage();
        
    })
}