//Dijikstra algorithm for finding shortest path in a graph
//Time complexity: O(n^2)
//Space complexity: O(n)
//params: graph, source
function dijkstra(graph, source) {
    let dist = [];
    let visited = [];
    let prev = [];
    for (let i = 0; i < graph.length; i++) {
        dist[i] = Infinity;
        visited[i] = false;
        prev[i] = null;
    }
    dist[source] = 0;
    for (let i = 0; i < graph.length; i++) {
        let u = minDistance(dist, visited);
        visited[u] = true;
        for (let v = 0; v < graph.length; v++) {
            if (
                !visited[v] &&
                graph[u][v] &&
                dist[u] !== Infinity &&
                dist[u] + graph[u][v] < dist[v]
            ) {
                dist[v] = dist[u] + graph[u][v];
                prev[v] = u;
            }
        }
    }
    return { dist, prev };
}
function minDistance(dist, visited) {
    let min = Infinity;
    let minIndex = -1;
    for (let v = 0; v < dist.length; v++) {
        if (visited[v] === false && dist[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    }
    return minIndex;
}
export default dijkstra;