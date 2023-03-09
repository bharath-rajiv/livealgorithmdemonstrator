  import React, { useState } from "react";
  import Button  from '@mui/material/Button';
  import bellmanFord from "../../algorithms/graph/bellmanFord";
  import dijkstra from "../../algorithms/graph/dijkstra";
  import floydWarshall from "../../algorithms/graph/floydWarshall";
  import kruskal from "../../algorithms/graph/kruskal";
  import prim from "../../algorithms/graph/prim"; 
  import tarjan from "../../algorithms/graph/tarjan";
  import topologicalSort from "../../algorithms/graph/topological";
  import hopcraftKarp from "../../algorithms/graph/hopcraftKarp";
  import fordFulkerson from "../../algorithms/graph/fordFulkerson";
  import johnson from "../../algorithms/graph/johnson";
  import depthFirstSearch from "../../algorithms/graph/depthfirstsearch";
  import breadthFirstSearch from "../../algorithms/graph/breadthfirst";
  import kosaraju from "../../algorithms/graph/kosaraju";
  import astarSearch from "../../algorithms/graph/astar";

  function GraphComponent() {
    const [algorithm, setAlgorithm] = useState("");
    const [result, setResult] = useState("");
    const [showSource, setShowSource] = useState(false);
    const [sourceCode, setSourceCode] = useState("");
    const [graph, setGraph] = useState("");
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");

    const handleGraphChange = (event) => {
      setGraph(event.target.value);
      console.log(graph)
    };

    const handleSourceChange =(event) => {
      setSource(event.target.value);
  
      };
      
      const handleDestinationChange = (event) => {
      setDestination(event.target.value);
      };
      
      const handleAlgorithm = () => {
        const rows = graph.split("\n");
        const grh = [];
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i].trim();
        if (row !== "") {
          const nums = row.split(/[ ,]+/).map(Number);
          grh.push(nums);
      }
    }
    console.log(grh);

          if (algorithm === "bellmanFord") {
            setResult(bellmanFord(grh, source, destination));
            setSourceCode(bellmanFord.toString());
          } else if (algorithm === "dijkstra") {
            setResult(dijkstra(grh, source));
            setSourceCode(dijkstra.toString());
          } else if (algorithm === "astar") {
            setResult(astarSearch(grh, source, destination));
            setSourceCode(astarSearch.toString());
          } else if (algorithm === "floydWarshall") {
            setResult(floydWarshall(grh));
            setSourceCode(floydWarshall.toString());
          } else if (algorithm === "kruskal") {
            setResult(kruskal(grh));
            setSourceCode(kruskal.toString());
          } else if (algorithm === "prim") {
            setResult(prim(grh));
            setSourceCode(prim.toString());
          } else if (algorithm === "tarjan") {
            setResult(tarjan(grh));
            setSourceCode(tarjan.toString());
          } else if (algorithm === "topologicalSort") {
            setResult(topologicalSort(grh));
            setSourceCode(topologicalSort.toString());
          } else if (algorithm === "hopcraftKarp") {
            const maxFlow = hopcraftKarp(grh, source, destination);
            setResult(maxFlow);
            setSourceCode(hopcraftKarp.toString());
            // alert(`The maximum flow from ${source} to ${destination} is ${maxFlow}.`);
          } else if (algorithm === "fordFulkerson") {
            const maxFlow = fordFulkerson(grh, source, destination);
            setResult(maxFlow);
            setSourceCode(fordFulkerson.toString());
            // alert(`The maximum flow from ${source} to ${destination} is ${maxFlow}.`);
          } else if (algorithm === "johnson") {
            setResult(johnson(grh));
            setSourceCode(johnson.toString());
          } else if (algorithm === "depthFirstSearch") {
            setResult(depthFirstSearch(grh, source));
            setSourceCode(depthFirstSearch.toString());
          } else if (algorithm === "breadthFirstSearch") {
            setResult(breadthFirstSearch(grh, source, destination));
            setSourceCode(breadthFirstSearch.toString());
          } else if (algorithm === "kosaraju") {
            setResult(kosaraju(grh));
            setSourceCode(kosaraju.toString());
          } else {
            setResult("Please select a graph algorithm");
          }
          console.log(result)
        };
        
      
      const handleShowSource = () => {
      setShowSource(!showSource);
      };
      
      return (
      <div>
      <label>
      Select Graph Algorithm:
      <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
      <option value="">Select Algorithm</option>
      <option value="bellmanFord">Bellman-Ford Algorithm</option>
      <option value="dijkstra">Dijkstra's Algorithm</option>
      <option value="floydWarshall">Floyd-Warshall Algorithm</option>
      <option value="kruskal">Kruskal's Algorithm</option>
      <option value="prim">Prim's Algorithm</option>
      <option value="tarjan">Tarjan's Algorithm</option>
      <option value="topologicalSort">Topological Sort</option>
      <option value="hopcraftKarp">Hopcroft-Karp Algorithm</option>
      <option value="fordFulkerson">Ford-Fulkerson Algorithm</option>
      <option value="johnson">Johnson's Algorithm</option>
      <option value="depthFirstSearch">Depth-First Search</option>
      <option value="breadthFirstSearch">Breadth-First Search</option>
      <option value="kosaraju">Kosaraju's Algorithm</option>
      <option value="astar">A* Search</option>
      </select>
      </label>
      <br />
      <label>
      Enter Graph Data:

  <textarea value={graph} onChange={handleGraphChange}></textarea>
  </label>
  <br />
  {algorithm === "bellmanFord" ||
  algorithm === "hopcraftKarp" ||
  algorithm === "fordFulkerson" ||
  algorithm === "dijkstra" ||
  algorithm === "depthFirstSearch" ||
  algorithm === "breadthFirstSearch" ? (
  <div>
  <label>
  Enter Source Vertex:
  <input type="text" value={source} onChange={handleSourceChange} />
  </label>
  <br />
  {algorithm === "bellmanFord" ||
  algorithm === "hopcraftKarp" ||
  algorithm === "fordFulkerson" ||
  algorithm === "breadthFirstSearch" ? (
  <label>
  Enter Destination Vertex:
  <input type="text" value={destination} onChange={handleDestinationChange} />
  </label>
  ) : null}
  </div>
  ) : null}
  <br />
  <Button variant="contained" onClick={handleAlgorithm}>Run Algorithm</Button >
  <br />
  {result ? <div>{result}</div> : null}
  <br />
  <Button variant="contained" onClick={handleShowSource}>Show Source Code</Button>
  {showSource ? <pre>{sourceCode}</pre> : null}
  </div>
  );
  }
  export default GraphComponent;