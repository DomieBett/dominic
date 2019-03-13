/**
 * Performs bubble sort on array
 * 
 * @param {any[]} arr - array to sort
 * 
 * @return {any[]} - sorted array
 */
function bubbleSort(arr) {
    let swapped = true;
    
    while(swapped) {

        swapped = false;
        
        for(let index = 0; index <= arr.length; index++) {
            if (arr[index] > arr[index + 1]) {
                arr = swap(arr, index, index + 1);
                swapped = true;
            }
        }
    }

    return arr;
}

/**
 * Performs selection sort on array
 * 
 * @param {any[]} arr - array to be sorted
 * 
 * @return {any[]} - sorted array
 */
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {

        let minimum = i;

        for (let j = (i + 1); j < arr.length; j++) {
            if (arr[j] < arr[minimum]) {
                minimum = j;
            }
        }

        arr = swap(arr, i, minimum);
    }

    return arr;
}

/**
 * Performs insertion sort
 * 
 * @param {any[]} arr - array to be sorted
 * 
 * @return {any[]} - sorted array
 */
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        pos = i;
        cursor = arr[i];

        while(pos > 0 && arr[pos - 1] > cursor) {
            arr = swap(arr, pos, pos - 1);
            pos --;
        }
    }

    return arr;
}

/**
 * Swaps two items at specified indexes in an array.
 * 
 * @param {any[]} arr - array to be used
 * @param {number} i - index to be swapped
 * @param {number} j - index to be swapped
 * 
 * @return {any[]} - swapped array
 */
function swap(arr, i, j) {
    first = arr[i];
    second = arr[j];

    arr[i] = second;
    arr[j] = first;

    return arr;
}


// Bubble sort
let items = [4, 3, 6, 17, 2, 15, 13, 19, 11, 5, 7, 8];
console.log('Bubble Sorted', bubbleSort(items));

items = [4, 3, 6, 17, 2, 15, 13, 19, 11, 5, 7, 8];
console.log('Selection Sorted', selectionSort(items));

items = [4, 3, 6, 17, 2, 15, 13, 19, 11, 5, 7, 8];
console.log('Insertion Sorted', insertionSort(items));
