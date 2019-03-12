# Algorithms

## Sorting algorithms.

The implementation for the search algorithm can be found in the `search.js` file in this directory.

### 1. Linear search algorithm.

The linear search algorithm is renounced for its simplicity in its implementation. In the age of fast processors and large memory spaces, the linear search algorithm has gained popularity. It is more readable and is easily maintanable. It is best to use the linear search algorithm when:

1. The list to be searched is small.
2. The list is not sorted and will only be used once.

However, when the array is larger, then there is need for a better more faster algorithm. This is where the binary search comes in. The big O notation of this is `O(n)` since the worst case scenario is the total length of the list.

### 2. Binary search algorithm.

This algorithm truly shines when the items in a list are sorted and the list is large. This algorithm divides a list by half, then checks the value to be searched against the middle value of the array if it is more or less. If it is the middle value, then the value has been found, however, if it is on one of either side, then this is the side that moves on to the next process. The process is then repeated to the side that proceeded until the only value left will be the one that's been searched for. This algorithm is efficient for large lists as it gets rid of halves that are not feasible for use.

Therefore it's big O notation is `O(log(n))`.
