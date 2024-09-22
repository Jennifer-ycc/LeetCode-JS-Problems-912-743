# Sort an Array

1/ QuickSort Algorithm: 
 - This algorithm that works by selecting a "pivot" element from an array and dividing the other elements into two subarrays
based on whether they are smaller or larger than the pivot.
 - All elements smaller than the pivot go to the left and all elements larger go to the right.
  - It recursively sorts the left and right subarrays.

2/ Pivot:
It is chosen as the first, last, middle, or even a random element and helps in dividing the array into two parts.

3/ Partition the Array: 
- All elements smaller than the pivot go to its left.
- All elements greater than the pivot go to its right.

4/ Recursive QuickSort:

- Apply QuickSort recursively to the left and right subarrays.
- This process continues until the subarrays have only one or zero elements.
- Combining the sorted subarrays will result in a fully sorted array.

5/ Time Complexity:
QuickSort divides the array into two relatively equal halves in each step. This leads to a time complexity of O(n log n).
The average time complexity of QuickSort is O(n log n). 
  - n is the number of elements in the array.
  - log n is the number of times you can divide the array in half.

6/ Space Complexity:
This implementation works in-place, one advantage of QuickSort is its low space usage.
  - Achieving minimal space usage, it more space-efficient for large datasets.

7/ Challenges Faced:
- Deciding Between QuickSort and MergeSort: 
    Initially, I debated whether to use QuickSort or MergeSort. 
    Both have their advantages, but I ultimately chose QuickSort for its in-place sorting and lower space usage.

- Choosing the Right Pivot: 
    One of the trickier parts of QuickSort was figuring out how to choose the pivot efficiently. Picking the wrong pivot could lead to bad performance, so I had to explore different strategies like using a random pivot, and even referred to other solutions online for inspiration. 

- Understanding the Concepts: 
It took some time to fully grasp the concepts behind, especially how recursion and partitioning in practice. 
But once I got a clear picture, things started to click. 

# Network Delay Time
  (Finding how long it will take for a signal to travel from a source node to all other nodes in a network.)

1/ Graph Construction (Adjacency List Representation): 
    - A graph represents a network of nodes and edges. 
    - Nodes represent objects (like computers, routers, etc.) 
    - Edges represent the connection between them with a specific travel time (or distance).
We use an adjacency list to represent the graph. 
Each node points to an array of its neighbors and the travel time to reach them.


2/ Distance Array:
We need to track the shortest known time to reach each node from the starting node (k).
    - We create a dist array (or list) where each index corresponds to a node.
    - Initially, the distance to all nodes is set to Infinity (∞) because we haven’t found any paths to them yet.
    - The distance to the source node (k) is set to 0 because the time to reach the source node from itself is always 0.

We maintain a dist array, initialized to Infinity for all nodes except the source node k, which is initialized to 0.

3/ Min-Heap (Priority Queue):
    - Always process the node with the smallest distance next.
    - Start with the source node (k) in the heap with a travel time of 0.
    - After processing the current node, update the distances to its neighboring nodes.

We use a min-heap, represented as a list (minHeap).
After processing a node, its neighbors are explored, and if a shorter path is found, the distance is updated, and the neighbor is added to the heap.

4/Heap Sorting:
    - Every time a new node is added to the heap, the heap reorders itself to ensure the node with the smallest travel time is processed next.
    - The heap allows for efficient retrieval of the node with the minimum travel time in O(log V) time (where V is the number of nodes).

The heap is sorted after every insertion to maintain the correct.

Note: 
If some nodes can’t be reached, it means there’s no path to those nodes, and the result will be -1. 


5/Time Complexity:
    - Each time an element is added or removed from the heap, it takes O(log V) time.
The total time complexity is O((V + E) log V):
    - V is the number of nodes.
    - E is the number of edges.
...The Dijkstra's algorithm with a priority queue...

6/ Space Complexity:
O(V + E) for storing : 
    - The graph (which has V nodes and E edges).
    - The dist array to keep track of the shortest distances.
