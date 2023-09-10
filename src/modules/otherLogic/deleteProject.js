//logic for deleting cards
import deleteStorageItem from "../storage/deleteStorageItems";


const mainContainer = document.getElementById("main-container");

export default function RemoveProject(card, uid) {
    const target = `project${uid}`
    deleteStorageItem(target);
    const cardParent = card.parentElement;
    console.log(cardParent)

    cardParent.removeChild(card);
}

