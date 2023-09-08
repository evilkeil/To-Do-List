//get items from a storage and parse it

export default function GetStorageItems(key){
   return JSON.parse(localStorage.getItem(key,))
}