//add whatever project object created fro the storage
import GetStorageItems from "./getStorage";


export default  function getItemsFromStorage(arr,keyPrefix){
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
       
      
        // Check if the key starts with whatever prefix
        if (key.startsWith(keyPrefix)) {
          let value = GetStorageItems(key)
          arr.push(value);
        }
      }
}