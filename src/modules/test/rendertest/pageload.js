import countItemsWithKeyName from "../../storage/countItems";
import getItemsFromStorage from "../../storage/getItemsFromStorage";
import renderProjectList from "./renderProjectList";
export default function onPageLoad(arr){
    document.addEventListener('DOMContentLoaded',function(){
        const items = countItemsWithKeyName("project")
         if(items === 0){
             renderEmptymessage();
         }else{ 
            getItemsFromStorage(arr,"project")
             
         }
         renderProjectList(arr);
         
     })
}