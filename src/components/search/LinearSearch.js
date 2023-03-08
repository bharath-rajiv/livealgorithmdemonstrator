import React, { useState } from "react";
import linearSearch from "../../algorithms/search/linear";

function LinearSearch() {
  const [array, setArray] = useState("");
  const [target, setTarget] = useState("");
  const [result, setResult] = useState("");
  const [functionCode, setFunctionCode] = useState("");

  const handleArrayChange = (event) => {
    setArray(event.target.value);
  };

  const handleTargetChange = (event) => {
    setTarget(event.target.value);
  };

  const handleSearch = () => {
    // Convert the array input string to an actual array
    const arr = array.split(",").map(Number);
    // Parse the target input string to a number
    const tgt = Number(target);
    console.log(arr, tgt);
    // Run the linear search algorithm on the array and target value
    const idx = linearSearch(arr, tgt);
    // Set the result state based on the index returned by the algorithm
    if (idx === -1) {
      setResult(`${tgt} not found in [${arr}]`);
    } else {
      setResult(`${tgt} found at index ${idx} in [${arr}]`);
    }
  };

  const handleShowSource = () => {
    setFunctionCode(linearSearch.toString());
  };

  return (
    <div>
      <h2>Linear Search</h2>
      <label>
        Array:
        <input type="text" value={array} onChange={handleArrayChange} />
      </label>
      <br />
      <label>
        Target:
        <input type="text" value={target} onChange={handleTargetChange} />
      </label>
      <br />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleShowSource}>Show Source</button>
      <br />
      <p>{result}</p>
      {functionCode && (
        <>
          <h3>linearSearch Function</h3>
          <pre>{functionCode}</pre>
        </>
      )}
    </div>
  );
}

export default LinearSearch;
