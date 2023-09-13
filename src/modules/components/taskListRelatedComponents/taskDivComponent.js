import countItemsWithKeyName from "../../storage/countItems";
import GetStorageItems from "../../storage/getStorage";

export default function taskDivComponent(title){
    const items = countItemsWithKeyName(title);
   if(items !== 0){
   const project =  GetStorageItems(title);
        console.log(project);
   }
}