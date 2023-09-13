import countItemsWithKeyName from "../../storage/countItems";
import GetStorageItems from "../../storage/getStorage";

export default function retriveTasks(title,uid){
    const items = countItemsWithKeyName(title);
   if(items !== 0){
   const project =  GetStorageItems(title);
        return project;
   }
}