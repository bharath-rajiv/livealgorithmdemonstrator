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
    return `Shortest distance between all pairs of vertices is:\n${JSON.stringify(distance,null, 2)}`;

}
console.log(floydWarshall([
    [0, 4, 0, 0, 0, 0, 0, 8, 0],
    [4, 0, 8, 0, 0, 0, 0, 11, 0],
    [0, 8, 0, 7, 0, 4, 0, 0, 2],
    [0, 0, 7, 0, 9, 14, 0, 0, 0],
    [0, 0, 0, 9, 0, 10, 0, 0, 0],
    [0, 0, 4, 14, 10, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 1, 6],
    [8, 11, 0, 0, 0, 0, 1, 0, 7],
    [0, 0, 2, 0, 0, 0, 6, 7, 0]
  ] ));

export default floydWarshall;
