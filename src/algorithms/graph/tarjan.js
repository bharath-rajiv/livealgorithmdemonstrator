//Tarjan algorithm for finding strongly connected components in a graph
//Time complexity: O(n^2)
//Space complexity: O(n)
//params: graph
function tarjan(graph) {
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
}
export default tarjan;
