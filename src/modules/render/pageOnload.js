//to check whther theres any projects created by the user in a prev session
import renderEmptymessage from "./renderEmptyMessage.js";
import countItemsWithKeyName from "../storage/countItems";
import renderStorage from "./renderStorage";
import renderProjects from "./renderProjects.js";



export default function OnPageLoad(projectList,key){
    document.addEventListener('DOMContentLoaded',function(){
       const items = countItemsWithKeyName(key)
        if(items === 0){
            renderEmptymessage();
        }else{
            renderProjects(projectList)
        }
        
        
    })
}