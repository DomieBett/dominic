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
 * Performs merge sort
 * 
 * @param {any[]} arr - array to be sorted
 * 
 * @return {any[]} - sorted array
 */
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, middle);
    const rightArray = arr.slice(middle);

    return merge(
        mergeSort(leftArray),
        mergeSort(rightArray)
    );
}

/**
 * Merges the divided array in sorted form.
 * 
 * @param {any[]} left - left part of an array
 * @param {any[]} right - right part of an array
 */
function merge(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;
    
    while(indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
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


// // Bubble sort
// let items = [4, 3, 6, 17, 2, 15, 13, 19, 11, 5, 7, 8];
// console.log('Bubble Sorted', bubbleSort(items));

// // Selevction sort
// items = [4, 3, 6, 17, 2, 15, 13, 19, 11, 5, 7, 8];
// console.log('Selection Sorted', selectionSort(items));

// // Insertion sort
// items = [4, 3, 6, 17, 2, 15, 13, 19, 11, 5, 7, 8];
// console.log('Insertion Sorted', insertionSort(items));

items = [4, 3, 6, 17, 2, 15, 13, 19, 11, 5, 7, 8];
console.log('Merge Sort', mergeSort(items));
