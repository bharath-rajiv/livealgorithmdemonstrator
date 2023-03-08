//Kosaraju's algorithm for finding strongly connected components in a directed graph
//Time complexity: O(n^2)
//Space complexity: O(n)
//params: graph
function kosaraju(graph) {
    let visited = [];
    let stack = [];
    let scc = [];
    for (let i = 0; i < graph.length; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }
    function dfs(v) {
        visited[v] = true;
        let successors = graph[v];
        for (let i = 0; i < successors.length; i++) {
            let w = successors[i];
            if (!visited[w]) {
                dfs(w);
            }
        }
        stack.push(v);
    }
    let reversedGraph = reverseGraph(graph);
    visited = [];
    while (stack.length > 0) {
        let v = stack.pop();
        if (!visited[v]) {
            let sccSet = [];
            dfs2(v, sccSet);
            scc.push(sccSet);
        }
    }
    function dfs2(v, sccSet) {
        visited[v] = true;
        sccSet.push(v);
        let successors = reversedGraph[v];
        for (let i = 0; i < successors.length; i++) {
            let w = successors[i];
            if (!visited[w]) {
                dfs2(w, sccSet);
            }
        }
    }
    return scc;
}
function reverseGraph(graph) {
    let reversedGraph = [];
    for (let i = 0; i < graph.length; i++) {
        reversedGraph[i] = [];
    }
    for (let i = 0; i < graph.length; i++) {
        let successors = graph[i];
        for (let j = 0; j < successors.length; j++) {
            let w = successors[j];
            reversedGraph[w].push(i);
        }
    }
    return reversedGraph;
}

// console.log(kosaraju([ [ 1 ], [ 2 ], [ 0 ] ]))
export default kosaraju;
