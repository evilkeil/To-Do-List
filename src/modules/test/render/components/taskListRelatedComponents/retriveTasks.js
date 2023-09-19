import countItemsWithKeyName from "../../storage/countItems";
import GetStorageItems from "../../storage/getStorage";


// export default function retriveTasks(title) {
//     const items = countItemsWithKeyName(title);
//     let project;

//     // Retrieve data from localStorage
//     const storedData = GetStorageItems(title);

//     // Check if storedData is null or undefined, and provide a default value
//     if (storedData === null || storedData === undefined) {
//         project = [];
//     } else {
//         project = storedData;
//     }

//     return project;
// }




export default function retriveTasks(title){
    const items = countItemsWithKeyName(title);
    let project;
   if(items > 0){
      const storedData = GetStorageItems(title);
      if (storedData === null || storedData === undefined) {
         project = [];
     } else {
         project = storedData;
     }
 
   }else {
      project = []
   }
  
   return project;
}