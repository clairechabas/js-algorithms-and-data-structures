# 🧮 JavaScript Algorithms & Data Structures Exercises

My personal practice space around algorithms and data structures.

## Algorithms
**Note on performance in JavaScript: Loops are usually 3+ times faster than their declarative counterparts.**
Imperative programming with loops results in better performance than using convenient Array methods. Invoking callback function is not free and adds up for big arrays. Declarative programming style is very expressive, easier to write, and far more readable. It’s better 99% of the time, but not when performance matters. Loops are usually 3+ times faster than their declarative counterparts.
For more details: [read the full study here](https://leanylabs.com/blog/js-forEach-map-reduce-vs-for-for_of/).

## Sorting Algorithms
For unsorted arrays we use algorithms to sort using different approaches.

Bubble, Selection and Insertion are less efficient algorithms, their average time complexity is O(n^2). Bubble and Insertion perform better than Selection on nearly sorted algorithms.
But they have a good space complexity of O(1).

Merge and Quick perform better, on average:
- Merge sort: Time complexity O(n * log(n)) | Space complexity O(n) 
- Quick sort: Time Complexity: O(n * log(n)) (worst O(n^2))) | Space Complexity: O(log(n))

The best time complexity you can hope for when comparing values is O(n * log(n)).

Radix sort is a special sorting algorithm which works with lists of numbers and doesn't compare elements, it relies on the number of digits instead.
Time Complexity: O(nk) | Space Complexity: O(n+k)

## Data Structures
- Singly Linked Lists
- Doubly Linked Lists
- Stacks
- Queues
- Trees
- Heaps
- Hash Tables
- Graphs & Graph Traversal