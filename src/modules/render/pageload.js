import countItemsWithKeyName from "../storage/countItems";
// import getItemsFromStorage from "../../storage/getItemsFromStorage";
import getItemsFromStorage from "../storage/getItemsFromStorage";
import renderProjectList from "./renderProjectList";
import emptyMessage from "./renderMessage";
import setStorageItem from "../storage/setStorage";
import GetStorageItems from "../storage/getStorage";
import addProjectBtn from "./addProjectBtnEventListener";
import deleteProjectBtn from "./deleteProjectEventListerner";
export default function onPageLoad(arr,n){
    document.addEventListener('DOMContentLoaded',function(){
        const items = countItemsWithKeyName("project");
        const hasN = countItemsWithKeyName("number");
        if (hasN === 0){
         n = 0;
         setStorageItem("number",0)
        }else{
         n = GetStorageItems("number");
        }
        
         if(items === 0){
            emptyMessage();
            addProjectBtn(arr,n);
            deleteProjectBtn(arr,n)
            
         }else{ 
            getItemsFromStorage(arr,"project")
            addProjectBtn(arr,n);
            deleteProjectBtn(arr,n)
         }
         renderProjectList(arr);
         
     })
     

   


}