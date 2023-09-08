//save objects in the storage as strings

export default function SetStorageItems(key,value){
    localStorage.setItem(key,JSON.stringify(value))
 };