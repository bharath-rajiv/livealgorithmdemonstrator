//Kruskal algorithm in java script
//Time complexity: O(n^2)
//Space complexity: O(n)
//params: graph
function kruskal(graph) {
    let parent = [];
    let result = [];
    let i = 0;
    let e = 0;
    for (i = 0; i < graph.length; i++) {
        parent[i] = i;
    }
    graph = graph.sort((a, b) => a[2] - b[2]);
    while (e < graph.length - 1) {
        let nextEdge = graph[i++];
        let x = find(parent, nextEdge[0]);
        let y = find(parent, nextEdge[1]);
        if (x !== y) {
            result[e++] = nextEdge;
            union(parent, x, y);
        }
    }
    return result;
}
function find(parent, i) {
    if (parent[i] === i) return i;
    return find(parent, parent[i]);
}
function union(parent, x, y) {
    let xset = find(parent, x);
    let yset = find(parent, y);
    parent[xset] = yset;
}
export default kruskal;
