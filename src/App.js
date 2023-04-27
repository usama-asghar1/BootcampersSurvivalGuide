 import logo from './logo.svg';
 import './App.css';
import Forum from './Forum/index.js';
import {Routes, Route} from "react-router-dom";
import Grid from "./Grid/index.js";
import weekGrid from "./lib/data.js";
import Login from "./Login/index.js";

function App() {
  return (
    <div>
    <Routes>
      <Route path = "/" element = {<Login/>}/>
      <Route path = "/grid" element = {<Grid data = {weekGrid} />}/>
      <Route path = "/forums/:id" element = {<Forum data = {weekGrid}/>}/>
      <Route/>
    </Routes>
    </div>
  );
}

export default App;
