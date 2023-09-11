import renderProjectList from "../rendertest/renderProjectList";


export default function deleteFromArray(arr,index){
    arr.splice(index,1);
    renderProjectList(arr)
}