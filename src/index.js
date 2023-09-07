import GetStorageItems from "./modules/storage/getStorage.js";
import SetStorageItems from "./modules/storage/setStorage.js";
import DeleteStorageItem from "./modules/storage/deleteStorageItems.js";
import checkStorage from "./modules/storage/checkStorage.js";


console.log(checkStorage());

SetStorageItems("user",{name:"kev",age:25});


console.log(checkStorage());

DeleteStorageItem("user");

console.log(checkStorage());