//render items in the storage

import renderEmptymessage from "./renderEmptyMessage.js";

export default  function renderStorage(arr){
    if(arr.length === 0){
      renderEmptymessage();}
}