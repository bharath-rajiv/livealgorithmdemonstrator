import React, { useState } from "react";
import {linearcode,binarycode,jumpcode,interpolationcode,exponentialcode,
fibonaccicode,ternarycode,sublistcode,} from '../../algorithms/graph/sourcecode';
import "../sortsearchmerge.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Button from "@mui/material/Button";
import linearSearch from "../../algorithms/search/linear";
import binarySearch from "../../algorithms/search/binary";
import jumpSearch from "../../algorithms/search/jump";
import interpolationSearch from "../../algorithms/search/interpolation";
import exponentialSearch from "../../algorithms/search/exponential";
import fibonacciSearch from "../../algorithms/search/fibonacci";
import ternarySearch from "../../algorithms/search/ternary";
import sublistSearch from "../../algorithms/search/sublist";
import CopyToClipboard from "react-copy-to-clipboard";
import {FaRegCopy} from "react-icons/fa";

function SearchComponent() {
  const [algorithm, setAlgorithm] = useState("");
  const [array, setArray] = useState("");
  const [target, setTarget] = useState("");
  const [result, setResult] = useState("");
  const [showSource, setShowSource] = useState(false);
  const [sourceCode, setSourceCode] = useState("");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("javascript");

  const handleArrayChange = (event) => {
    setArray(event.target.value);
  };

  const handleTargetChange = (event) => {
    setTarget(event.target.value);
  };

  const handleSearch = () => {
    let arr = [];
    if (array.startsWith("[") && array.endsWith("]")) {
      arr = JSON.parse(array);
    } else if (
      !array.includes(",") &&
      array.trim().split(/\s+/).every((str) => !isNaN(Number(str)))
    ) {
      arr = array.trim().split(/\s+/).map(Number);
    } else {
      arr = array.split(",").map(Number);
    }
    let tgt = Number(target);
    if(algorithm === 'sublist'){if (target.startsWith("[") && target.endsWith("]")) {
      tgt = JSON.parse(target);
    } else if (
      !target.includes(",") &&
      target.trim().split(/\s+/).every((str) => !isNaN(Number(str)))
    ) {
      tgt = target.trim().split(/\s+/).map(Number);
    } else {
      tgt = target.split(",").map(Number);
    }}
    
    
    if (algorithm === "linear") {
      setResult(linearSearch(arr, tgt));
      setSourceCode(linearcode);
    } else if (algorithm === "binary") {
      setResult(binarySearch(arr, tgt));
      setSourceCode(binarycode);
    } else if (algorithm === "jump") {
      setResult(jumpSearch(arr, tgt));
      setSourceCode(jumpcode);
    } else if (algorithm === "interpolation") {
      setResult(interpolationSearch(arr, tgt));
      setSourceCode(interpolationcode);
    } else if (algorithm === "exponential") {
      setResult(exponentialSearch(arr, tgt));
      setSourceCode(exponentialcode);
    } else if (algorithm === "fibonacci") {
      setResult(fibonacciSearch(arr, tgt));
      setSourceCode(fibonaccicode);
    } else if (algorithm === "sublist") {
      setResult(sublistSearch(arr, tgt));
      setSourceCode(sublistcode);
    }else if (algorithm === "ternary") {
      setResult(ternarySearch(arr, tgt));
      setSourceCode(ternarycode);
    }else {
      setResult("Please select a search algorithm");
    }
    if (result === -1) {
      setOutput(`${tgt} not found in [${arr}]`);
    } else {
      setOutput(`${tgt} found at index ${result} in [${arr}]`);
    }
    console.log(result, arr ,tgt);
  };

  const handleShowSource = () => {
    setShowSource(!showSource);
  };

  return (
    <div className="ui">
      <label>
        Select Search Algorithm:
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option value="">Select Algorithm</option>
          <option value="binary">Binary Search</option>
      <option value="exponential">Exponential Search</option>
      <option value="fibonacci">Fibonacci Search</option>
      <option value="interpolation">Interpolation Search</option>
      <option value="jump">Jump Search</option>
          <option value="linear">Linear Search</option>
          <option value="sublist">SubList Search</option>
          <option value="ternary">Ternary Search</option>
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
  <br />
  <div className="button-container">
    <Button variant="contained" onClick={handleSearch}>
      Search
    </Button>
    <Button variant="contained" onClick={handleShowSource}>
      {showSource ? "Hide" : "Show"} Source
    </Button>
  </div>
  <br />
  <label>
    Result:
    <span>{output}</span>
  </label>
  <div className="source">
    <CopyToClipboard className="copy-code" text={sourceCode}>
    <span className="copy-icon-wrapper">
      {/* <button> */}

            <FaRegCopy className="copy-icon" />
      {/* </button> */}
          </span>
    </CopyToClipboard>
  {showSource && (
    <SyntaxHighlighter className="SyntaxHigh" language={language} style={vscDarkPlus}>
      {sourceCode}
    </SyntaxHighlighter>
  )}
</div>

</div>
);
}

export default SearchComponent;
