# Algorithms

## <u>Searching algorithms.</u>

The implementation for the search algorithm can be found in the `search.js` file in this directory.

### 1. Linear search algorithm.

The linear search algorithm is renounced for its simplicity in its implementation. In the age of fast processors and large memory spaces, the linear search algorithm has gained popularity. It is more readable and is easily maintanable. It is best to use the linear search algorithm when:

1. The list to be searched is small.
2. The list is not sorted and will only be used once.

The big O notation of this is `O(n)` since the worst case scenario is the total length of the list.

However, when the array is larger, then there is need for a better more faster algorithm. This is where the binary search comes in.

### 2. Binary search algorithm.

This algorithm truly shines when the items in a list are sorted and the list is large. This algorithm divides a list by half, then checks the value to be searched against the middle value of the array if it is more or less. If it is the middle value, then the value has been found, however, if it is on one of either side, then this is the side that moves on to the next process. The process is then repeated to the side that proceeded until the only value left will be the one that's been searched for. This algorithm is efficient for large lists as it gets rid of halves that are not feasible for use.

Therefore it's big O notation is `O(log(n))`.

## <u>Sorting Algorithms.</u>

Various implementations of sorting algorithms can be found in the file `sort.js` in this directory

### 1. Bubble Sort

Bubble sort works by going through the array repeatedly and comparing pairs of elements then sorts them in the right order if they are in the wrong order. For example, it will check the first two items, and swap them if the second item is less than the first item, then the second and third item and swap them if the third item is less than the second item till the end of the array. It does this in iterations until the array if fully sorted.

Since it repeatedly passes through an unsorted array, it has the worst case complexity of O(n<sup>2</sup>)

### 2. Selection Sort

This works by separating an array to sorted and unsorted segmenets. It will start off with the entire array as an unsorted segment. It finds the smallest element within the unsorted segment and moves it to the end of the sorted segment. It does this repeatedly until all that's left of the array is the sorted segment.

Often times, it is faster than bubble sort.

### 3. Insertion Sort.

Insertion sort will loop through an array searching moving each individual element back until it is in its right position. It picks an element, and finds its right place within another sorted array. It does this untill all elements have been placed in the right order.

It is simplistic and faster than both the selection and insertion sort. 
