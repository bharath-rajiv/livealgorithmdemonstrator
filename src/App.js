
import './App.css';
import GraphComponent from './components/graph/graphMerge';
import SortComponent from './components/sort/sortMerge';
import SearchComponent from './components/search/searchMerge';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchComponent/>
        {/* <SortComponent/>
        <GraphComponent/> */}
      </header>
    </div>
  );
}

export default App;
