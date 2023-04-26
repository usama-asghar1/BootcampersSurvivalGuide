import logo from './logo.svg';
import './App.css';
import Forum from './Forum/index.js';
import {Link, Routes, Route} from "react-router-dom";
import Grid from "./Grid/index.js";
import weekGrid from "./lib/data.js";

function App() {
  return (
    <div>
    <Routes>
      <Route path = "/" element = {<Grid data = {weekGrid} />}/>
      <Route path = "/forums/:id" element = {<Forum data = {weekGrid}/>}/>

      <Route/>
    </Routes>
    </div>

    // <div className="App">
    //   <Forum />
    // </div>
  );
}

export default App;
