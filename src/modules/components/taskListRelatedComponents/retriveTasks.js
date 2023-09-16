import countItemsWithKeyName from "../../storage/countItems";
import GetStorageItems from "../../storage/getStorage";

export default function retriveTasks(title){
    const items = countItemsWithKeyName(title);
    let project;
   if(items !== 0){
     project =  GetStorageItems(title);
        
   }else {
      project = []
   }
  
   return project;
}