import pushTaskToArray from "./pushTaskToArray";

export default function addTask(arr,title){
    
    pushTaskToArray(arr,title);
    console.log(arr)
    localStorage.setItem(title, JSON.stringify(arr));
}