//add whatever project object created into the storage



export default  function getProjectsFromStorage(arr){
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
      
        // Check if the key starts with "project"
        if (key.startsWith("project")) {
          // If it does, push the value into the array
          arr.push(value);
        }
      }
}