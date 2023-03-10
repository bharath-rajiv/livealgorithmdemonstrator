
import React from 'react';
import Navbar from './components/Navbar';
import GraphComponent from './components/graph/graphMerge';
import SortComponent from './components/sort/sortMerge';
import SearchComponent from './components/search/searchMerge';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function App() {
  const startColor = getRandomColor();
  const endColor = getRandomColor();
  const gradientStyle = {
    background: `linear-gradient(260deg, ${startColor} 0%, ${endColor} 82%)`,
  };

  return (
  <Router>
    <div className="App" style={gradientStyle}>
    <Navbar/>
      
    <Routes>
      <Route path="/livealgorithmdemonstrator/search" element={<SearchComponent/>}/>
      <Route path="/livealgorithmdemonstrator/sort" element={<SortComponent/>}/>
      <Route path="/livealgorithmdemonstrator/search" element={<GraphComponent/>}/>
    </Routes> 
    

    
  </div>
   </Router> 
  );
    
}

export default App;
