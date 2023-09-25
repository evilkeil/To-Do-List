import renderProjectList from "./renderProjectList";
import renderTaskContainer from "./renderTaskContainer";

export default function render(arr,selected){
    renderProjectList(arr,selected);
    renderTaskContainer(arr,selected);
}