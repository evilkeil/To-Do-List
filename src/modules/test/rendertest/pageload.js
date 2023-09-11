import countItemsWithKeyName from "../../storage/countItems";
import getItemsFromStorage from "../../storage/getItemsFromStorage";
import renderProjectList from "./renderProjectList";
import emptyMessage from "./renderMessage";
export default function onPageLoad(arr){
    document.addEventListener('DOMContentLoaded',function(){
        const items = countItemsWithKeyName("project")
         if(items === 0){
            emptyMessage();
         }else{ 
            getItemsFromStorage(arr,"project")
             
         }
         renderProjectList(arr);
         
     })
}