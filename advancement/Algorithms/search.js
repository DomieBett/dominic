/**
 * Linear search is renouned for its simplicity. It is implemented by going
 * through each item in a list sequentially and checking if it is the searched
 * item. It is best to use on tiny lists that are not sorted.
 * 
 * @param {any[]} items - array containing items
 * @param {any} searchTerm - Term to search for
 * 
 * @return { number | null } - will return index of itemToSearch or null if not found.
 */
function linearSearch(items, itemToSearch) {
    for (const index in items) {
        if (items[index] === itemToSearch) {
            return index;
        }
    }

    return null;
}

/**
 * Binary search is best used in cases where the array is sorted and the
 * list is large. It works by splitting the list into half, then checks
 * compares the item to search for with the item at the center of the
 * array, determining if the item being searched for is at the right or the
 * left of the item. It then divides the side which the item is in by half
 * and repeats the same procedure.
 * NB -> Only works with sorted list
 * 
 * @param { any[] } items - array containing items
 * @param { any } itemToSearch - item to be searched for.
 * 
 * @return { number | null } - return index of item or null if not found.
 */
function binarySearch(items, itemToSearch) {
    let start = 0;
    let stop = items.length - 1;
    let middleIndex = Math.floor((start + stop)/2);

    while(items[middleIndex] !== itemToSearch && start < stop) {
        if (itemToSearch < items[middleIndex]) {
            stop = middleIndex - 1;
        } else {
            start = middleIndex + 1;
        }

        middleIndex = Math.floor((start + stop) / 2);
    }

    return (items[middleIndex] !== itemToSearch) ? null : middleIndex;
}


/**
 * How to use...
 */
let items = [4, 3, 6, 17, 2, 15, 13, 19, 11, 5, 7, 8];

console.log('linear', linearSearch(items, 15));
console.log('binary', binarySearch(items.sort((a, b) => a - b), 15)); // only works with sorted arrays.
