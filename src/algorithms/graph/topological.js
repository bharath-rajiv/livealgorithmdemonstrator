//Topological sort in javascript
//params: graph
function topologicalSort(graph) {
    let visited = {};
    let sorted = [];
    for (let i = 0; i < graph.length; i++) {
        if (!visited[i]) {
            topologicalSortUtil(graph, i, visited, sorted);
        }
    }
    return sorted;
}
function topologicalSortUtil(graph, vertex, visited, sorted) {
    visited[vertex] = true;
    for (let i = 0; i < graph[vertex].length; i++) {
        if (!visited[graph[vertex][i]]) {
            topologicalSortUtil(graph, graph[vertex][i], visited, sorted);
        }
    }
    sorted.push(vertex);
}
export default topologicalSort;
