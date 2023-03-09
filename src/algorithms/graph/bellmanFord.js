//Bellman Ford Algorithm in JavaScript
// param {number[][]} graph - The graph to be searched
// param {number} source - The source node
// param {number} destination - The destination node
function bellmanFord(graph, source, destination) {
    let n = graph.length;
    let distance = new Array(n).fill(Infinity);
    distance[source] = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (graph[j][k] !== 0) {
                    distance[k] = Math.min(distance[k], distance[j] + graph[j][k]);
                }
            }
        }
    }
    return `Distance to reach ${destination} from ${source} is ${distance[destination]}`;
}
export default bellmanFord;
