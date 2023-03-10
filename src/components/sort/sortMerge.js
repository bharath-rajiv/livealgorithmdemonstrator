  import React, { useState } from "react";
  import "../sortsearchmerge.css";
  import Button  from '@mui/material/Button';
  import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
  import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
  import bitonicSort from "../../algorithms/sort/bitonic";
  import bogoSort from "../../algorithms/sort/bogo";
  import bubbleSort from "../../algorithms/sort/bubble";
  import bucketSort from "../../algorithms/sort/bucket";
  import cocktailSort from "../../algorithms/sort/cocktail";
  import combSort from "../../algorithms/sort/comb";
  import countingSort from "../../algorithms/sort/counting";
  import cubeSort from "../../algorithms/sort/cube";
  import cycleSort from "../../algorithms/sort/cycle";
  import flashSort from "../../algorithms/sort/flash";
  import gnomeSort from "../../algorithms/sort/gnome";
  import heapSort from "../../algorithms/sort/heap";
  import insertionSort from "../../algorithms/sort/insertion";
  import introSort from "../../algorithms/sort/intro";
  import librarySort from "../../algorithms/sort/library";
  import mergeSort from "../../algorithms/sort/merge";
  import oddEvenSort from "../../algorithms/sort/oddEven";
  import pancakeSort from "../../algorithms/sort/pancake";
  import pigeonholeSort from "../../algorithms/sort/pigeonhole";
  import quickSort from "../../algorithms/sort/quick";
  import radixSort from "../../algorithms/sort/radix";
  import selectionSort from "../../algorithms/sort/selection";
  import shellSort from "../../algorithms/sort/shell";
  import slowSort from "../../algorithms/sort/slow";
  import smoothSort from "../../algorithms/sort/smooth";
  import stoogeSort from "../../algorithms/sort/stooge";
  import strandSort from "../../algorithms/sort/strand";
  import timSort from "../../algorithms/sort/tim";
  import tournamentSort from "../../algorithms/sort/tournament";
  import treeSort from "../../algorithms/sort/tree";
  function SortComponent() {
    const [language, setLanguage] = useState("javascript");
    const [algorithm, setAlgorithm] = useState("");
    const [array, setArray] = useState("");
    let sortedArray = [];
    const [showSource, setShowSource] = useState(false);
    const [sourceCode, setSourceCode] = useState("");
    const [output, setOutput] = useState("");
    const handleArrayChange = (event) => {
      setArray(event.target.value);
    };
    const handleSort = () => {
        let arr = [];
      if (array.startsWith("[") && array.endsWith("]")) {
        arr = JSON.parse(array);
      } 
      else if (!array.includes(",") && array.trim().split(/\s+/).every(str => !isNaN(Number(str)))) {
        arr = array.trim().split(/\s+/).map(Number);
      }
      else {
        arr = array.split(" ").map(Number);
      }
  switch (algorithm) {
  case "bitonic":
  sortedArray = bitonicSort(arr);
  setSourceCode(bitonicSort.toString());
  break;
  case "bogo":
  sortedArray = bogoSort(arr);
  setSourceCode(bogoSort.toString());
  break;
  case "bubble":
  sortedArray = bubbleSort(arr);
  setSourceCode(bubbleSort.toString());
  break;
  case "cocktail":
  sortedArray = cocktailSort(arr);
  setSourceCode(cocktailSort.toString());
  break;
  case "comb":
  sortedArray = combSort(arr);
  setSourceCode(combSort.toString());
  break;
  case "counting":
  sortedArray = countingSort(arr);
  setSourceCode(countingSort.toString());
  break;
  case "cycle":
  sortedArray = cycleSort(arr);
  setSourceCode(cycleSort.toString());
  break;
  case "cube":
  sortedArray = cubeSort(arr);
  setSourceCode(cubeSort.toString());
  break;
  case "gnome":
  sortedArray = gnomeSort(arr);
  setSourceCode(gnomeSort.toString());
  break;
  case "heap":
  sortedArray = heapSort(arr);
  setSourceCode(heapSort.toString());
  break;
  case "insertion":
  sortedArray = insertionSort(arr);
  setSourceCode(insertionSort.toString());
  break;
  case "intro":
  sortedArray = introSort(arr);
  setSourceCode(introSort.toString());
  break;
  case "merge":
  sortedArray = mergeSort(arr);
  setSourceCode(mergeSort.toString());
  break;
  case "oddEven":
  sortedArray = oddEvenSort(arr);
  setSourceCode(oddEvenSort.toString());
  break;
  case "pancake":
  sortedArray = pancakeSort(arr);
  setSourceCode(pancakeSort.toString());
  break;
  case "quick":
  sortedArray = quickSort(arr);
  setSourceCode(quickSort.toString());
  break;
  case "radix":
  sortedArray = radixSort(arr);
  setSourceCode(radixSort.toString());
  break;
  case "selection":
  sortedArray = selectionSort(arr);
  setSourceCode(selectionSort.toString());
  break;
  case "shell":
  sortedArray = shellSort(arr);
  setSourceCode(shellSort.toString());
  break;
  case "smooth":
  sortedArray = smoothSort(arr);
  setSourceCode(smoothSort.toString());
  break;
  case "stooge":
  sortedArray = stoogeSort(arr);
  setSourceCode(stoogeSort.toString());
  break;
  case "tim":
  sortedArray = timSort(arr);
  setSourceCode(timSort.toString());
  break;
  case "tree":
  sortedArray = treeSort(arr);
  setSourceCode(treeSort.toString());
  break;
  case "slow":
  sortedArray = slowSort(arr);
  setSourceCode(slowSort.toString());
  break;
  case "strand":
  sortedArray = strandSort(arr);
  setSourceCode(strandSort.toString());
  break;
  case "flash":
  sortedArray = flashSort(arr);
  setSourceCode(flashSort.toString());
  break;
  case "tournament":
  sortedArray = tournamentSort(arr);
  setSourceCode(tournamentSort.toString());
  break;
  case "library":
  sortedArray = librarySort(arr);
  setSourceCode(librarySort.toString());
  break;
  case "pigeonhole":
  sortedArray = pigeonholeSort(arr);
  setSourceCode(pigeonholeSort.toString());
  break;
  case"bucket":
  sortedArray = bucketSort(arr);
  setSourceCode(bucketSort.toString());
  break;
  default:
  setOutput("Please select a sorting algorithm");
  }
  if (sortedArray) {
  setOutput(`Sorted Array: [${sortedArray}]`);
  }
  };
  const handleShowSource = () => {
  setShowSource(!showSource);
  };
  return (
    <div className="ui">
      <label>
        Select Sorting Algorithm:
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option value="">Select Algorithm</option>
          <option value="bitonic">Bitonic Sort</option>
          <option value="bogo">Bogo Sort</option>
          <option value="bubble">Bubble Sort</option>
          <option value="bucket">Bucket Sort</option>
          <option value="cocktail">Cocktail Sort</option>
          <option value="comb">Comb Sort</option>
          <option value="counting">Counting Sort</option>
          <option value="cycle">Cycle Sort</option>
          <option value="cube">Cube Sort</option>
          <option value="gnome">Gnome Sort</option>
          <option value="heap">Heap Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="intro">Intro Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="oddEven">Odd-Even Sort</option>
          <option value="pancake">Pancake Sort</option>
          <option value="quick">Quick Sort</option>
          <option value="radix">Radix Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="shell">Shell Sort</option>
          <option value="smooth">Smooth Sort</option>
          <option value="stooge">Stooge Sort</option>
          <option value="tim">Tim Sort</option>
          <option value="tree">Tree Sort</option>
          <option value="slow">Slow Sort</option>
          <option value="sleep">Sleep Sort</option>
          <option value="strand">Strand Sort</option>
          <option value="flash">Flash Sort</option>
          <option value="tournament">Tournament Sort</option>
          <option value="library">Library Sort</option>
          <option value="pigeonhole">Pigeonhole Sort</option>
        </select>
      </label>
      <br />
      <label>
Input Array:
<input type="text" value={array} onChange={handleArrayChange} />
</label>
<br />
<div className="button-container">
    <Button variant="contained" onClick={handleSort}>
      Sort
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
  {showSource && (
    <SyntaxHighlighter className="SyntaxHigh" language={language} style={vscDarkPlus}>
      {sourceCode}
    </SyntaxHighlighter>
  )}
</div>
</div>
);
}

export default SortComponent;


