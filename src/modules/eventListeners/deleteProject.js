import { projectDeleteBtn } from "../cache/domElements";
import { PROJECT_KEY, PROJECT_SELECTED_KEY } from "../cache/storageKeys";
import renderProjectList from "../render/renderProjectList";
import GetStorageItems from "../storage/getStorage";
import setStorageItem from "../storage/setStorage";

export default function deleteProject() {
    projectDeleteBtn.addEventListener('click', (e) => {
        // Get the current selected project from storage
        const selected = GetStorageItems(PROJECT_SELECTED_KEY);

        // Get the project array from storage
        const array = GetStorageItems(PROJECT_KEY);

        // Filter out the selected project from the array
        const newArray = array.filter(project => project.id !== selected);

        // Update the storage with the modified array
        setStorageItem(PROJECT_KEY, newArray);

        // Clear the selected project
        setStorageItem(PROJECT_SELECTED_KEY, null);

        // Render the updated project list
        renderProjectList(newArray, null);
    });
}