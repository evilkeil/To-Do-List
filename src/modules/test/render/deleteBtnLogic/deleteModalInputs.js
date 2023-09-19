import { yes,no,deleteModal } from "../cache/domElements";
import deleteFromArray from "./deleteFromArray";
import deleteStorageItem from "../storage/deleteStorageItems";
import setStorageItem from "../storage/setStorage";
export default function deleteModalInputs(arr,index,uid,n){
    yes.addEventListener('click',(e)=>{
        deleteFromArray(arr,index);
        deleteStorageItem(`project${uid}`);
        deleteModal.close();
        // n--;
        // setStorageItem("number", n);

    })

    no.addEventListener('click',(e)=>{
        e.preventDefault();
        deleteModal.close();
    })
}