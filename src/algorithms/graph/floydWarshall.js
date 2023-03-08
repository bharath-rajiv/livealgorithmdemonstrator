//Floyd Warshall Algorithm in JavaScript
// param {number[][]} graph - The graph to be searched
function floydWarshall(graph) {
    let n = graph.length;
    let distance = new Array(n);
    for (let i = 0; i < n; i++) {
        distance[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            distance[i][j] = graph[i][j];
        }
    }
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (distance[i][k] + distance[k][j] < distance[i][j]) {
                    distance[i][j] = distance[i][k] + distance[k][j];
                }
            }
        }
    }
    return distance;
}

export default floydWarshall;
