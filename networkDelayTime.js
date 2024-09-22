/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    // Create a graph using an adjacency list
    const graph = Array.from({ length: n + 1 }, () => []);
    

    for (const [u, v, w] of times) {
        graph[u].push([v, w]);
    }

    // Initialize ,except the start node k
    const distances = Array(n + 1).fill(Infinity);
    distances[k] = 0;  // Starting node distance is 0

    // Min-Heap
    const minHeap = [[0, k]]; // [time, node]


    while (minHeap.length) {
        const [currentTime, u] = minHeap.shift();  // the smallest time

        
        if (currentTime > distances[u]) continue;

        
        for (const [v, time] of graph[u]) {
            const newTime = currentTime + time;
            
            // update the distance and push to heap
            if (newTime < distances[v]) {
                distances[v] = newTime;
                minHeap.push([newTime, v]);
            }
        }

        // Sort the heap by time
        minHeap.sort((a, b) => a[0] - b[0]);
    }


    const result = Math.max(...distances.slice(1));

    // If unreachable, return -1
    return result === Infinity ? -1 : result;
};

// Example 1
console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2)); 

// Example 2
console.log(networkDelayTime([[1,2,1]], 2, 1)); 

// Example 3
console.log(networkDelayTime([[1,2,1]], 2, 2)); 
