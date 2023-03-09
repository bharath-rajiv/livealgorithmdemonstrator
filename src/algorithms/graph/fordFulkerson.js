//Ford Fulkerson Algorithm in JavaScript
// param {number[][]} graph - The graph to be searched
// param {number} source - The source node
// param {number} destination - The destination node
function fordFulkerson(graph, source, destination) {
    // let n = graph.length;
    let maxFlow = 0;
    let path = bfs(graph, source, destination);
    while (path) {
        let flow = Infinity;
        for (let i = 0; i < path.length - 1; i++) {
            flow = Math.min(flow, graph[path[i]][path[i + 1]]);
        }
        for (let i = 0; i < path.length - 1; i++) {
            graph[path[i]][path[i + 1]] -= flow;
            graph[path[i + 1]][path[i]] += flow;
        }
        maxFlow += flow;
        path = bfs(graph, source, destination);
    }
    return maxFlow;
}
function bfs(graph, source, destination) {
    let n = graph.length;
    let visited = new Array(n).fill(false);
    let queue = [];
    let prev = new Array(n).fill(null);
    queue.push(source);
    visited[source] = true;
    while (queue.length > 0) {
        let u = queue.shift();
        for (let v = 0; v < n; v++) {
            if (!visited[v] && graph[u][v] > 0) {
                visited[v] = true;
                prev[v] = u;
                queue.push(v);
            }
        }
    }
    let path = [];
    let u = destination;
    while (u !== null) {
        path.push(u);
        u = prev[u];
    }
    path.reverse();
    return path.length === 1 ? null : path;
 }
// let graph = [
//     [0, 16, 13, 0, 0, 0],
//     [0, 0, 10, 12, 0, 0],
//     [0, 4, 0, 0, 14, 0],
//     [0, 0, 9, 0, 0, 20],
//     [0, 0, 0, 7, 0, 4],
//     [0, 0, 0, 0, 0, 0]
// ];

// let source = 0;
// let destination = 5;

// let maxFlow = fordFulkerson(graph, source, destination);

// console.log("Maximum flow:", maxFlow);

export default fordFulkerson;