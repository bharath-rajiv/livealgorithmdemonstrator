//Breadth First Search
//params: graph, start, end
function breadthFirstSearch(graph, start, end) {
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
            return `Path found Begin-> {${str}} -> End`;
        }
        for (let i = 0; i < graph[current].length; i++) {
            if (graph[current][i] === 1 && !visited[i]) {
                visited[i] = true;
                parent[i] = current;
                queue.push(i);
            }
        }
    }
    return `No path from ${start} to ${end}`;
}
export default breadthFirstSearch;