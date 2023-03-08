//Johnson algorithm for finding shortest paths in a graph with negative edges
//Time complexity: O(n^2)
//Space complexity: O(n)
//params: graph
function johnson(graph) {
    let dist = [];
    let prev = [];
    let n = graph.length;
    let newGraph = [];
    for (let i = 0; i < n; i++) {
        newGraph[i] = [];
        for (let j = 0; j < n; j++) {
            newGraph[i][j] = graph[i][j];
        }
    }
    for (let i = 0; i < n; i++) {
        newGraph[n][i] = 0;
    }
    let bellmanFord = bellmanFordAlgorithm(newGraph, n);
    if (bellmanFord.dist[n] !== Infinity) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (graph[i][j] !== Infinity) {
                    graph[i][j] += bellmanFord.dist[i] - bellmanFord.dist[j];
                }
            }
        }
        for (let i = 0; i < n; i++) {
            let dijkstra = dijkstraAlgorithm(graph, i);
            dist[i] = dijkstra.dist;
            prev[i] = dijkstra.prev;
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][j] !== Infinity) {
                    dist[i][j] -= bellmanFord.dist[i] - bellmanFord.dist[j];
                }
            }
        }
    }
    return { dist, prev };
}
function bellmanFordAlgorithm(graph, source) {
    let dist = [];
    let prev = [];
    for (let i = 0; i < graph.length; i++) {
        dist[i] = Infinity;
        prev[i] = null;
    }
    dist[source] = 0;
    for (let i = 0; i < graph.length - 1; i++) {
        for (let u = 0; u < graph.length; u++) {
            for (let v = 0; v < graph.length; v++) {
                if (
                    graph[u][v] &&
                    dist[u] !== Infinity &&
                    dist[u] + graph[u][v] < dist[v]
                ) {
                    dist[v] = dist[u] + graph[u][v];
                    prev[v] = u;
                }
            }
        }
    }
    return { dist, prev };
}
function dijkstraAlgorithm(graph, source) {
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
export default johnson;
