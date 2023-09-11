import { yes,no,deleteModal } from "../cache/domElements";
import deleteFromArray from "./deleteFromArray";
import deleteStorageItem from "../storage/deleteStorageItems";

export default function deleteModalInputs(arr,index,uid){
    yes.addEventListener('click',(e)=>{
        deleteFromArray(arr,index);
        deleteStorageItem(`project${uid}`);
        deleteModal.close();
    })

    no.addEventListener('click',(e)=>{
        e.preventDefault();
        deleteModal.close();
    })
}