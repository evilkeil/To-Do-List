import GetStorageItems from "./modules/storage/getStorage";
import SetStorageItems from "./modules/storage/setStorage";


const obj = {name:"kevin",age:26,food:"pizza"};

SetStorageItems("user1",obj);

console.log(GetStorageItems("user1"));