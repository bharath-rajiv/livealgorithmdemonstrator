//A* search in Javascript
//paramters : graph, root, goal

function astarSearch(graph, root, goal) {
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
      if (!curConnected || !Array.isArray(curConnected)) {
        continue; // skip if curConnected is undefined or not an array
      }
      let neighborIdx = [];
      let idx = curConnected.indexOf(1);
      while (idx !== -1) {
        if (idx !== undefined) { // add a check to ensure idx is not undefined
          neighborIdx.push(idx);
        }
        idx = curConnected.indexOf(1, idx + 1);
      }
      for (let j = 0; j < neighborIdx.length; j++) {
        if (nodesLen[neighborIdx[j]] === Infinity) {
          nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
          queue.push(neighborIdx[j]);
        }
      }
    }
    return nodesLen[goal];
  }
  astarSearch([[0, 1, 1, 1, 0], [1, 0, 1, 0, 0], [1, 1, 0, 1, 0], [1, 0, 1, 0, 1], [0, 0, 0, 1, 0]], 0, 4)
  export default astarSearch;
  