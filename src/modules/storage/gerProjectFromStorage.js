//add whatever project object created into the storage

let projectList =[]

export default  function getProjectsFromStorage(){
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
      
        // Check if the key starts with "project"
        if (key.startsWith("project")) {
          // If it does, push the value into the array
          projectArray.push(value);
        }
      }
}