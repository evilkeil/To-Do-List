import getItemsFromStorage from "../../storage/getItemsFromStorage";

export default function pushStorageToArray(arr){
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Check if the key starts with the desired keyPrefix
        if (key.startsWith(keyPrefix)) {
           const obj = GetStorageItems(key);

           const exists = arr.some((curr) => curr.UID === obj.UID);

            if (!exists){
                arr.push(obj);
            }
        }
    }

    
}