//render items in the storage

import renderEmptymessage from "./renderEmptyMessage.js";

export default  function renderStorage(item){
    if(item === 0){
      renderEmptymessage();}
}