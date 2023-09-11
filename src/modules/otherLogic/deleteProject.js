//logic for deleting cards
import deleteStorageItem from "../storage/deleteStorageItems";


const mainContainer = document.getElementById("main-container");

export default function RemoveProject(div, uid) {
    const target = `project${uid}`
    deleteStorageItem(target);
    if(div){
        mainContainer.removeChild(div);
    }
   
}

