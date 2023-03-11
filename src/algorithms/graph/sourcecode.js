// export const fs = require('fs');


// function readFile(path) {
//   try {
//     export const data = fs.readFileSync(path, 'utf8');
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// }

// export const astarCode = readFile('src/algorithms/graph/astar.js');
// export const bellmanfordCode = readFile('src/algorithms/graph/bellmanford.js');
// export const breadthfirstCode = readFile('src/algorithms/graph/breadthfirst.js');
// export const dijkstraCode = readFile('src/algorithms/graph/dijkstra.js');
// export const floydwarshallCode = readFile('src/algorithms/graph/floydwarshall.js');
// export const kruskalCode = readFile('src/algorithms/graph/kruskal.js');
// export const fordFullkersonCode = readFile('src/algorithms/graph/fordfullkerson.js');
// export const hopcroftKarpCode = readFile('src/algorithms/graph/hopcroftkarp.js');
// export const johnsonCode = readFile('src/algorithms/graph/johnson.js');
// export const kosarajuCode = readFile('src/algorithms/graph/kosaraju.js');
// export const primCode = readFile('src/algorithms/graph/prim.js');
// export const tarjanCode = readFile('src/algorithms/graph/tarjan.js');
// export const topologicalCode = readFile('src/algorithms/graph/topological.js');
// export const depthfirstCode = readFile('src/algorithms/graph/depthfirst.js');

// console.log(astarCode, bellmanfordCode, breadthfirstCode, dijkstraCode, floydwarshallCode, kruskalCode, fordFullkersonCode, hopcroftKarpCode, johnsonCode, kosarajuCode, primCode, tarjanCode, topologicalCode, depthfirstCode);
// graph
export const astarCode = `function astarSearch(graph, root, goal) {
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
}`;
export const bellmanfordCode = `function bellmanFord(graph, source, destination) {
  let n = graph.length;
  let distance = new Array(n).fill(Infinity);
  distance[source] = 0;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n; j++) {
          for (let k = 0; k < n; k++) {
              if (graph[j][k] !== 0) {
                  distance[k] = Math.min(distance[k], distance[j] + graph[j][k]);
              }
          }
      }
  }
  return \`Distance to reach \${destination} from \${source} is \${distance[destination]}\`;
}`;
export const breadthfirstCode = `function breadthFirstSearch(graph, start, end) {
  let queue = [start];
  let str= " ";
  let visited = {};
  visited[start] = true;
  let parent = {};
  while (queue.length !== 0) {
      let current = queue.shift();
      if (current === end) {
          let path = [end];
          while (current !== start) {
              path.unshift(parent[current]);
              current = parent[current];
          }
          for (let k of path){
              str = str+k.toString()+"->";

          }
          return \`Path found Begin-> {\${str}} -> End\`;
      }
      for (let i = 0; i < graph[current].length; i++) {
          if (graph[current][i] === 1 && !visited[i]) {
              visited[i] = true;
              parent[i] = current;
              queue.push(i);
          }
      }
  }
  return \`No path from \${start} to \${end}\`;
}`;
export const depthfirstCode = `function depthFirstSearch(graph, root) {
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
}`;
export const dijkstraCode = `function dijkstra(graph, source) {
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
  // returns the shortest distance from source to each node and the path  taken
  console.log(dist,prev);
  for(let i=0;i<prev.length;i++){
      if (prev[i]===null){prev[i]= "No path"}}
  return \`Shortest distance from \${source} to each node is \\n    {\${dist}}\\n   and the path taken is \\n    {\${prev}}\` ;
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
}`;
export const floydwarshallCode = `function floydWarshall(graph) {
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
  return \`Shortest distance between all pairs of vertices is:\\n\${JSON.stringify(distance,null, 2)}\`;

}`;
export const fordFullkersonCode = `function fordFulkerson(graph, source, destination) {
  // let n = graph.length;
  let maxFlow = 0;
  let path = bfs(graph, source, destination);
  while (path) {
      let flow = Infinity;
      for (let i = 0; i < path.length - 1; i++) {
          flow = Math.min(flow, graph[path[i]][path[i + 1]]);
      }
      for (let i = 0; i < path.length - 1; i++) {
          graph[path[i]][path[i + 1]] -= flow;
          graph[path[i + 1]][path[i]] += flow;
      }
      maxFlow += flow;
      path = bfs(graph, source, destination);
  }
  return maxFlow;
}
function bfs(graph, source, destination) {
  let n = graph.length;
  let visited = new Array(n).fill(false);
  let queue = [];
  let prev = new Array(n).fill(null);
  queue.push(source);
  visited[source] = true;
  while (queue.length > 0) {
      let u = queue.shift();
      for (let v = 0; v < n; v++) {
          if (!visited[v] && graph[u][v] > 0) {
              visited[v] = true;
              prev[v] = u;
              queue.push(v);
          }
      }
  }
  let path = [];
  let u = destination;
  while (u !== null) {
      path.push(u);
      u = prev[u];
  }
  path.reverse();
  return path.length === 1 ? null : path;
}`;
export const hopcroftKarpCode = `function hopcraftKarp(graph) {
  let n = graph.length;
  let m = graph[0].length;
  let matching = new Array(n).fill(-1);
  let dist = new Array(m).fill(0);
  let result = 0;

  while (bfs(graph, matching, dist, n, m)) {
    for (let u = 0; u < n; u++) {
      if (matching[u] === -1 && dfs(graph, u, matching, dist, n, m)) {
        result++;
      }
    }
  }

  return result;
}

function bfs(graph, matching, dist, n, m) {
  let queue = [];
  let front = 0;
  let rear = 0;

  for (let u = 0; u < n; u++) {
    if (matching[u] === -1) {
      dist[u] = 0;
      queue[rear++] = u;
    } else {
      dist[u] = Infinity;
    }
  }

  dist[Infinity] = Infinity;

  while (front < rear) {
    let u = queue[front++];

    for (let v = 0; v < m; v++) {
      if (graph[u][v] && dist[matching[v]] === Infinity) {
        dist[matching[v]] = dist[u] + 1;
        queue[rear++] = matching[v];
      }
    }
  }

  return dist[Infinity] !== Infinity;
}

function dfs(graph, u, matching, dist, n, m) {
  if (u !== Infinity) {
    for (let v = 0; v < m; v++) {
      if (graph[u][v] && dist[matching[v]] === dist[u] + 1 && dfs(graph, matching[v], matching, dist, n, m)) {
          matching[v] = u;
          matching[u] = v;
          return true;
          }
          }
          dist[u] = Infinity;
return false;
}

return true;
}`;
export const johnsoncode = `function johnson(graph) {
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
}`;
export const kosarajuCode=`function kosaraju(graph) {
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
}`;
export const kruskalCode = `function kruskal(graph) {
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
}`;
export const primCode = `function prim(graph) {
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
}`;
export const tarjancode = `function tarjan(graph) {
  let index = 0;
  let stack = [];
  let lowlink = [];
  let indexMap = [];
  let scc = [];
  for (let i = 0; i < graph.length; i++) {
      if (indexMap[i] === undefined) {
          strongConnect(i);
      }
  }
  function strongConnect(v) {
      indexMap[v] = index;
      lowlink[v] = index;
      index++;
      stack.push(v);
      let successors = graph[v];
      for (let i = 0; i < successors.length; i++) {
          let w = successors[i];
          if (indexMap[w] === undefined) {
              strongConnect(w);
              lowlink[v] = Math.min(lowlink[v], lowlink[w]);
          } else if (stack.indexOf(w) !== -1) {
              lowlink[v] = Math.min(lowlink[v], indexMap[w]);
          }
      }
      if (lowlink[v] === indexMap[v]) {
          let w = -1;
          let sccSet = [];
          while (w !== v) {
              w = stack.pop();
              sccSet.push(w);
          }
          scc.push(sccSet);
      }
  }
  return scc;
}`;
export const topologicalcode = `function topologicalSort(graph) {
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
};`
//search
export const binarycode = `function binarySearch(arr, val) {
  arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
      if (val < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
  }`;
  export const exponentialcode = `function exponentialSearch(arr, val) {
    arr.sort((a, b) => a - b);
    let len = arr.length;
    if (arr[0] === val) return 0;
    let i = 1;
    while (i < len && arr[i] <= val) i *= 2;
    return binarySearch(arr, i / 2, Math.min(i, len), val);
}
function binarySearch(arr, start, end, val) {
    if (end >= start) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === val) return mid;
        if (arr[mid] > val) return binarySearch(arr, start, mid - 1, val);
        return binarySearch(arr, mid + 1, end, val);
    }
    return -1;
}`;
export const fibonaccicode = `function fibonacciSearch(arr, val) {
  arr.sort((a, b) => a - b);
  let len = arr.length;
  let fibMMm2 = 0;
  let fibMMm1 = 1;
  let fibM = fibMMm2 + fibMMm1;
  while (fibM < len) {
      fibMMm2 = fibMMm1;
      fibMMm1 = fibM;
      fibM = fibMMm2 + fibMMm1;
  }
  let offset = -1;
  while (fibM > 1) {
      let i = Math.min(offset + fibMMm2, len - 1);
      if (arr[i] < val) {
          fibM = fibMMm1;
          fibMMm1 = fibMMm2;
          fibMMm2 = fibM - fibMMm1;
          offset = i;
      } else if (arr[i] > val) {
          fibM = fibMMm2;
          fibMMm1 = fibMMm1 - fibMMm2;
          fibMMm2 = fibM - fibMMm1;
      } else return i;
  }
  if (fibMMm1 && arr[offset + 1] === val) return offset + 1;
  return -1;
}`;
export const interpolationcode = `function interpolationSearch(arr, val) {
  arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;
  while (arr[start] <= val && arr[end] >= val) {
      let pos = start + Math.floor((val - arr[start]) * (end - start) / (arr[end] - arr[start]));
      if (arr[pos] === val) return pos;
      if (arr[pos] < val) start = pos + 1;
      else end = pos - 1;
  }
  return -1;
}`;

export const jumpcode = `function jumpSearch(arr, val) {
  arr.sort((a, b) => a - b);
  let len = arr.length;
  let step = Math.floor(Math.sqrt(len));
  let prev = 0;
  while (arr[Math.min(step, len) - 1] < val) {
      prev = step;
      step += Math.floor(Math.sqrt(len));
      if (prev >= len) return -1;
  }
  while (arr[prev] < val) {
      prev++;
      if (prev === Math.min(step, len)) return -1;
  }
  if (arr[prev] === val) return prev;
  return -1;
}`;
export const linearcode = `function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
`;
export const sublistcode = `function sublistSearch(arr, key) {
  let n = arr.length;
  let m = key.length;
  for (let i = 0; i < n - m + 1; i++) {
      let j = 0;
      while (j < m && arr[i + j] === key[j]) {
          j++;
      }
      if (j === m) {
          return i;
      }
  }
  return -1;
}`;
export const ternarycode =`function ternarySearch(arr, key) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
      let mid1 = Math.floor(left + (right - left) / 3);
      let mid2 = Math.floor(right - (right - left) / 3);
      if (arr[mid1] === key) {
          return mid1;
      }
      if (arr[mid2] === key) {
          return mid2;
      }
      if (key < arr[mid1]) {
          right = mid1 - 1;
      } else if (key > arr[mid2]) {
          left = mid2 + 1;
      } else {
          left = mid1 + 1;
          right = mid2 - 1;
      }
  }
  return -1;
}
`;
//sort 
export const bitoniccode =`function bitonicSort(arr) {
  bitonicMerge(arr, 0, arr.length, 1);
  return arr;
}
function compAndSwap(arr, i, j, dir) {
  if (dir === (arr[i] > arr[j])) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
}
function bitonicMerge(arr, low, cnt, dir) {
  if (cnt > 1) {
      let k = Math.floor(cnt / 2);
      for (let i = low; i < low + k; i++) {
          compAndSwap(arr, i, i + k, dir);
      }
      bitonicMerge(arr, low, k, dir);
      bitonicMerge(arr, low + k, k, dir);
  }
} 
`;
export const bogocode = `function bogoSort(arr) {
  // let n = arr.length;
  while (!isSorted(arr)) {
      shuffle(arr);
  }
  return arr;
}
function isSorted(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
      if (arr[i] < arr[i - 1]) {
          return false;
      }
  }
  return true;
}
function shuffle(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
      let j = Math.floor(Math.random() * n);
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
}
`
export const bubblecode =`function bubbleSort(arr) {
  let len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
      for (let j = 1; j <= i; j++) {
          if (arr[j - 1] > arr[j]) {
              let temp = arr[j - 1];
              arr[j - 1] = arr[j];
              arr[j] = temp;
          }
      }
  }
  return arr;
}`;
export const bucketcode = `function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j--;

      }
      arr[j + 1] = key;
  }
  return arr;
}

function bucketSort(arr) {
  let n = arr.length;
  let buckets = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++) {
      let bucketIndex = Math.floor(n * arr[i]);
      buckets[bucketIndex].push(arr[i]);
  }
  buckets.forEach(bucket => {
      insertionSort(bucket);
  });
  return [].concat(...buckets);
}`;
export const cocktailcode=`function cocktailSort(arr) {
  let n = arr.length;
  let swapped = true;
  let start = 0;
  let end = n - 1;
  while (swapped) {
      swapped = false;
      for (let i = start; i < end; i++) {
          if (arr[i] > arr[i + 1]) {
              let temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
              swapped = true;
          }
      }
      if (!swapped) {
          break;
      }
      swapped = false;
      end--;
      for (let i = end - 1; i >= start; i--) {
          if (arr[i] > arr[i + 1]) {
              let temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
              swapped = true;
          }
      }
      start++;
  }
  return arr;
}`;
export const combcode =`function combSort(arr) {
  let n = arr.length;
  let gap = n;
  let shrink = 1.3;
  let sorted = false;
  while (!sorted) {
      gap = Math.floor(gap / shrink);
      if (gap <= 1) {
          gap = 1;
          sorted = true;
      }
      let i = 0;
      while (i + gap < n) {
          if (arr[i] > arr[i + gap]) {
              let temp = arr[i];
              arr[i] = arr[i + gap];
              arr[i + gap] = temp;
              sorted = false;
          }
          i++;
      }
  }
  return arr;
}`;
export const countingcode =`function    countingSort(arr) {
  let n = arr.length;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let range = max - min + 1;
  let count = new Array(range).fill(0);
  let output = new Array(n);
  for (let i = 0; i < n; i++) {
      count[arr[i] - min]++;
  }
  for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
  }
  for (let i = n - 1; i >= 0; i--) {
      output[count[arr[i] - min] - 1] = arr[i];
      count[arr[i] - min]--;
  }
  return output;
}`;
export const cubecode = `function cubeSort(arr) {
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
              let temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
      }
  }
  return arr;
}`;
export const cyclecode =`function cycleSort(arr) {
  // let writes = 0;
  for (let cycleStart = 0; cycleStart <= arr.length - 2; cycleStart++) {
      let item = arr[cycleStart];
      let pos = cycleStart;
      for (let i = cycleStart + 1; i < arr.length; i++) {
          if (arr[i] < item) pos++;
      }
      if (pos === cycleStart) continue;
      while (item === arr[pos]) pos++;
      if (pos !== cycleStart) {
          let temp = item;
          item = arr[pos];
          arr[pos] = temp;
          // writes++;
      }
      while (pos !== cycleStart) {
          pos = cycleStart;
          for (let i = cycleStart + 1; i < arr.length; i++) {
              if (arr[i] < item) pos++;
          }
          while (item === arr[pos]) pos++;
          if (item !== arr[pos]) {
              let temp = item;
              item = arr[pos];
              arr[pos] = temp;
              // writes++;
          }
      }
  }
  return arr;
}`;
export const flashcode = `function flashSort(arr) {
  let n = arr.length;
  let m = ~~(0.45 * n);
  let l = new Array(m);
  for (let i = 0; i < m; i++) l[i] = 0;
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < n; i++) {
      if (arr[i] < min) min = arr[i];
      if (arr[i] > max) max = arr[i];
  }
  if (min === max) return arr;
  let c1 = (m - 1) / (max - min);
  for (let k = 0; k < n; k++) {
      let j = ~~(c1 * (arr[k] - min));
      l[j]++;
  }
  for (let p = 1; p < m; p++) l[p] = l[p] + l[p - 1];
  // let hold = arr[0];
  let c2 = (n - 1) * (c1);
  let newn = 0;
  let flash;
  let j = 0;
  let k = m - 1;
  while (newn < (n - 1)) {
      while (j > (l[k] - 1)) {
          j++;
          c2 = c2 - 1;
          k = ~~(c2 * (arr[j] - min));
      }
      flash = arr[j];
      if (j < l[k]) {
          while (j < l[k]) {
              k = ~~(c2 * (flash - min));
              l[k]--;
              let temp = arr[l[k]];
              arr[l[k]] = flash;
              flash = temp;
              newn++;
          }
      }
  }
  return arr;
}`;
export const gnomecode = `function gnomeSort(arr) {
  let n = arr.length;
  let i = 0;
  while (i < n) {
      if (i === 0 || arr[i] >= arr[i - 1]) {
          i++;
      } else {
          let temp = arr[i];
          arr[i] = arr[i - 1];
          arr[i - 1] = temp;
          i--;
      }
  }
  return arr;
}`;
export const heapcode = `function heapSort(arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2); i >= 0; i--) {
      heapify(arr, i, n);
  }
  for (let i = n - 1; i > 0; i--) {
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      heapify(arr, 0, i);
  }
  return arr;
}
function heapify(arr, i, n) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;
  if (left < n && arr[left] > arr[max]) {
      max = left;
  }
  if (right < n && arr[right] > arr[max]) {
      max = right;
  }
  if (max !== i) {
      let temp = arr[i];
      arr[i] = arr[max];
      arr[max] = temp;
      heapify(arr, max, n);
  }
}`;

export const insertioncode = `function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j--;
      }
      arr[j + 1] = key;
  }
  return arr;
}`;
export const introcode = `function introSort(arr) {
  let maxDepth = Math.floor(Math.log(arr.length) * 2);
  return introSortHelper(arr, 0, arr.length - 1, maxDepth);
}
function introSortHelper(arr, lo, hi, depthLimit) {
  if (hi <= lo) return;
  if (depthLimit === 0) {
      heapSort(arr, lo, hi);
      return;
  }
  let p = partition(arr, lo, hi);
  introSortHelper(arr, lo, p - 1, depthLimit - 1);
  introSortHelper(arr, p + 1, hi, depthLimit - 1);
}
function partition(arr, lo, hi) {
  let pivot = arr[hi];
  let i = lo - 1;
  for (let j = lo; j < hi; j++) {
      if (arr[j] <= pivot) {
          i++;
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
      }
  }
  let temp = arr[i + 1];
  arr[i + 1] = arr[hi];
  arr[hi] = temp;
  return i + 1;
}
function heapSort(arr, lo, hi) {
  let n = hi - lo + 1;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i, lo);
  }
  for (let i = n - 1; i >= 0; i--) {
      let temp = arr[lo];
      arr[lo] = arr[lo + i];
      arr[lo + i] = temp;
      heapify(arr, i, 0, lo);
  }
}
function heapify(arr, n, i, lo) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  if (l < n && arr[lo + l] > arr[lo + largest]) {
      largest = l;
  }
  if (r < n && arr[lo + r] > arr[lo + largest]) {
      largest = r;
  }
  if (largest !== i) {
      let temp = arr[lo + i];
      arr[lo + i] = arr[lo + largest];
      arr[lo + largest] = temp;
      heapify(arr, n, largest, lo);
  }
}`;
export const librarycode = `function librarySort(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
      temp.push(arr[i]);
  }
  temp.sort((a, b) => a - b);
  return temp;
}`;
export const mergecode  = `function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
      } else {
          result.push(right[j]);
          j++;
      }

  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}


function mergeSort(arr) {
  let n = arr.length;
  if (n < 2) {
      return arr;
  }
  let mid = Math.floor(n / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}`;
export const oddevencode = ` function oddEvenSort(arr) {
  let sorted = false;
  while (!sorted) {
      sorted = true;
      for (let i = 1; i < arr.length - 1; i += 2) {
          if (arr[i] > arr[i + 1]) {
              let temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
              sorted = false;
          }
      }
      for (let i = 0; i < arr.length - 1; i += 2) {
          if (arr[i] > arr[i + 1]) {
              let temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
              sorted = false;
          }
      }
  }`;

export const pancakecode = `function pancakeSort(arr) {
  let n = arr.length;
  for (let i = n; i > 1; i--) {
      let max = Math.max(...arr.slice(0, i));
      let index = arr.indexOf(max);
      flip(arr, index + 1);
      flip(arr, i);
  }
  return arr;
}
function flip(arr, k) {
  let left = 0;
  let right = k - 1;
  while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
  }
}`;
export const pigeonholecode= `function pigeonholeSort(arr) {
  let n = arr.length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let range = max - min + 1;
  let holes = new Array(range).fill(0);
  for (let i = 0; i < n; i++) {
      holes[arr[i] - min]++;
  }
  let index = 0;
  for (let i = 0; i < range; i++) {
      while (holes[i]--) {
          arr[index++] = i + min;
      }
  }
  return arr;
}`;
export const quickcode=`function quickSort(arr) {
  let n = arr.length;
  if (n < 2) {
      return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < n; i++) {
      if (arr[i] < pivot) {
          left.push(arr[i]);
      } else {
          right.push(arr[i]);
      }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}`;
export const radixcode =`function radixSort(arr) {
  let max = Math.max(...arr);
  let n = arr.length;
  let exp = 1;
  while (max / exp > 0) {
      let buckets = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < n; i++) {
          let digit = Math.floor(arr[i] / exp) % 10;
          buckets[digit].push(arr[i]);
      }
      arr = [].concat(...buckets);
      exp *= 10;
  }
  return arr;
}`;
export const selectioncode = `function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
          if (arr[j] < arr[min]) min = j;
      }
      if (min !== i) {
          let temp = arr[i];
          arr[i] = arr[min];
          arr[min] = temp;
      }
  }
  return arr;
}`;
export const shellcode = `function shellSort(arr) {
  let n = arr.length;
  let gap = Math.floor(n / 2);
  while (gap > 0) {
      for (let i = gap; i < n; i++) {
          let temp = arr[i];
          let j = i;
          while (j >= gap && arr[j - gap] > temp) {
              arr[j] = arr[j - gap];
              j -= gap;
          }
          arr[j] = temp;
      }
      gap = Math.floor(gap / 2);
  }
  return arr;
}`;
export const slowcode = `function slowSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) left.push(arr[i]);
      else right.push(arr[i]);
  }
  return slowSort(left).concat(pivot, slowSort(right));
}`;
export const smoothcode = `function smoothSort(arr) {
  let len = arr.length;
  let temp = arr[0];
  for (let i = 0; i < len; i++) {
      if (arr[i] < temp) {
          temp = arr[i];
          arr[i] = arr[i - 1];
          arr[i - 1] = temp;
      }
  }
  return arr;
}`
export const stoogecode = `function stoogeSort(arr) {
  let n = arr.length;
  if (n < 2) {
      return arr;
  }
  if (arr[0] > arr[n - 1]) {
      let temp = arr[0];
      arr[0] = arr[n - 1];
      arr[n - 1] = temp;
  }
  if (n > 2) {
      let m = Math.floor(n / 3);
      stoogeSort(arr.slice(0, n - m));
      stoogeSort(arr.slice(m));
      stoogeSort(arr.slice(0, n - m));
  }
  return arr;
}`;
export const strandcode = `function strandSort(arr) {
  let sorted = false;
  while (!sorted) {
      sorted = true;
      for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] > arr[i + 1]) {
              let temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
              sorted = false;
          }
      }
  }
  return arr;
}`;
export const timcode = `function timSort(arr) {
  export const minRun = 32;
  for (let i = 0; i < arr.length; i += minRun) {
      insertionSort(arr, i, Math.min(i + minRun - 1, arr.length - 1));
  }
  for (let size = minRun; size < arr.length; size = 2 * size) {
      for (let left = 0; left < arr.length; left += 2 * size) {
          let mid = left + size - 1;
          let right = Math.min(left + 2 * size - 1, arr.length - 1);
          merge(arr, left, mid, right);
      }
  }
  return arr;
}
function insertionSort(arr, left, right) {
  for (let i = left + 1; i <= right; i++) {
      let temp = arr[i];
      let j = i - 1;
      while (j >= left && arr[j] > temp) {
          arr[j + 1] = arr[j];
          j--;
      }
      arr[j + 1] = temp;
  }
}

function merge(arr, l, m, r) {
  let len1 = m - l + 1,
      len2 = r - m;
  let left = new Array(len1);
  let right = new Array(len2);
  for (let x = 0; x < len1; x++) {
      left[x] = arr[l + x];
  }
  for (let x = 0; x < len2; x++) {
      right[x] = arr[m + 1 + x];
  }
  let i = 0;
  while (i < len1 && len1 > 0) {
      arr[l++] = left[i++];
  }
  while (i < len2 && len2 > 0) {
      arr[l++] = right[i++];
  }
}`
export const tournamentcode = `function tournamentSort(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
      temp.push(arr[i]);
  }
  temp.sort((a, b) => a - b);
  return temp;
}`
export const treecode = `function treeSort(arr) {
  let root = null;
  for (let i = 0; i < arr.length; i++) {
      root = insert(root, arr[i]);
  }
  let result = [];
  traverse(root, result);
  return result;
}
function insert(root, value) {
  if (root == null) {
      root = new Node(value);
  } else if (value < root.value) {
      root.left = insert(root.left, value);
  } else {
      root.right = insert(root.right, value);
  }
  return root;
}
function traverse(root, result) {
  if (root == null) return;
  traverse(root.left, result);
  result.push(root.value);
  traverse(root.right, result);
}
class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}`;

