# 🧮 JavaScript Algorithms & Data Structures Exercices

Preparing for coding interviews.

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
