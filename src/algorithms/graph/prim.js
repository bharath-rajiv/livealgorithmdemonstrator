//Prim's algorithm for finding minimum spanning tree in a graph
//Time complexity: O(n^2)
//Space complexity: O(n)
//params: graph
function prim(graph) {
    let dist = [];
    let visited = [];
    let prev = [];
    for (let i = 0; i < graph.length; i++) {
        dist[i] = Infinity;
        visited[i] = false;
        prev[i] = null;
    }
    dist[0] = 0;
    for (let i = 0; i < graph.length; i++) {
        let u = minDistance(dist, visited);
        visited[u] = true;
        for (let v = 0; v < graph.length; v++) {
            if (
                !visited[v] &&
                graph[u][v] &&
                dist[u] !== Infinity &&
                graph[u][v] < dist[v]
            ) {
                dist[v] = graph[u][v];
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
export default prim;