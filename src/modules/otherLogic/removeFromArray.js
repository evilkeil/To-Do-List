export default function removeFromArray(arr,key,uid){
    arr.forEach(element => {
        if(element.title === key){
            if(element.dataset.uid === uid){
                const indexToRemove = arr.indexOf(element);
                arr.splice(indexToRemove, 1);
            }
            
        }
    });
}