//check the number of items in the local storage
export default function countItemsWithKeyName(keyPrefix) {
    let count = 0;

    // Iterate through all local storage keys
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Check if the key starts with the desired keyPrefix
        if (key.startsWith(keyPrefix)) {
            count++;
        }
    }

    return count;
}


