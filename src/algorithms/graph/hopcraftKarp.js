function hopcraftKarp(graph) {
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
}

  export default hopcraftKarp;