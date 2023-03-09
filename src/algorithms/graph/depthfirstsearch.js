//depth first search in Javascript
//paramters : graph, root
// graph example:
// 0----1
function depthFirstSearch(graph, root) {
    let str= " ";
    let nodesLen = {};
    for (let i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0;
    let queue = [root];
    let current;
    while (queue.length !== 0) {
        current = queue.shift();
        let curConnected = graph[current];
        let neighborIdx = [];
        let idx = curConnected.indexOf(1);
        while (idx !== -1) {
            neighborIdx.push(idx);
            idx = curConnected.indexOf(1, idx + 1);
        }
        for (let j = 0; j < neighborIdx.length; j++) {
            if (nodesLen[neighborIdx[j]] === Infinity) {
                nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
                queue.push(neighborIdx[j]);
            }
        }
    }
for (let k in nodesLen) {
  str = str + nodesLen[k].toString();
  if (k !== Object.keys(nodesLen)[Object.keys(nodesLen).length - 1]) {
    str = str + "->";
  }
}
console.log(nodesLen['0']);

    return `Shortest path form Source ${root} to all other elements
    -> {${str}} <-
    End`;

}

// let graph = [
//     [0, 1, 1, 0, 0],
//     [1, 0, 1, 0, 0],
//     [1, 1, 0, 1, 0],
//     [0, 0, 1, 0, 1],
//     [0, 0, 0, 1, 0]
//   ];
//   let root = 0;
// let nodesLen = depthFirstSearch(graph, root);
// console.log(nodesLen);

export default depthFirstSearch;