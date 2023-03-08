import React, { useState } from "react";
import linearSearch from "./algorithms/search/linear";
import binarySearch from "./algorithms/search/binary";
import astarSearch from "./algorithms/search/astar";
import jumpSearch from "./algorithms/search/jump";
import interpolationSearch from "./algorithms/search/interpolation";
import exponentialSearch from "./algorithms/search/exponential";
import fibonacciSearch from "./algorithms/search/fibonacci";

function SearchComponent() {
  const [algorithm, setAlgorithm] = useState("");
  const [array, setArray] = useState("");
  const [target, setTarget] = useState("");
  const [result, setResult] = useState("");
  const [showSource, setShowSource] = useState(false);
  const [sourceCode, setSourceCode] = useState("");
  const[output,setOutput]=useState("")

  const handleArrayChange = (event) => {
    setArray(event.target.value);
  };

  const handleTargetChange = (event) => {
    setTarget(event.target.value);
  
  };



  const handleSearch = () => {
    const arr = array.split(",").map(Number);
    const tgt = Number(target);
    if (result === -1) {
      setOutput(`${tgt} not found in [${arr}]`);
    } else {
      setOutput(`${tgt} found at index ${result} in [${arr}]`);
    }
    if (algorithm === "linear") {
      setResult(linearSearch(arr, tgt));
      setSourceCode(linearSearch.toString());
    } else if (algorithm === "binary") {
      setResult(binarySearch(arr, tgt));
      setSourceCode(binarySearch.toString());
    } else if (algorithm === "astar") {
      setResult(astarSearch(arr, tgt));
      setSourceCode(astarSearch.toString());
    } else if (algorithm === "jump") {
      setResult(jumpSearch(arr, tgt));
      setSourceCode(jumpSearch.toString());
    } else if (algorithm === "interpolation") {
      setResult(interpolationSearch(arr, tgt));
      setSourceCode(interpolationSearch.toString());
    } else if (algorithm === "exponential") {
      setResult(exponentialSearch(arr, tgt));
      setSourceCode(exponentialSearch.toString());
    } else if (algorithm === "fibonacci") {
      setResult(fibonacciSearch(arr, tgt));
      setSourceCode(fibonacciSearch.toString());
    } else {
      setResult("Please select a search algorithm");
    }
    console.log(result,arr)
  };

  const handleShowSource = () => {
    setShowSource(!showSource);
  };

  return (
    <div>
      <label>
        Select Search Algorithm:
        <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
          <option value="">Select Algorithm</option>
          <option value="linear">Linear Search</option>
          <option value="binary">Binary Search</option>
          <option value="astar">A* Search</option>
          <option value="jump">Jump Search</option>
          <option value="interpolation">Interpolation Search</option>
          <option value="exponential">Exponential Search</option>
          <option value="fibonacci">Fibonacci Search</option>
        </select>
      </label>
      <br />
      <label>
        Input Array:
        <input type="text" value={array} onChange={handleArrayChange} />
      </label>
      <br />
      <label>
        Target:
        <input type="text" value={target} onChange={handleTargetChange} />
      </label>
      <br />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleShowSource}>{showSource ? "Hide" : "Show"} Source</button>
      <br />
      <label>
        Result:
        <span>{output}</span>
      </label>
      {showSource && <pre>{sourceCode}</pre>}
    </div>
  );
}

export default SearchComponent;
