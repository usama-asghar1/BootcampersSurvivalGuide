import {Link} from "react-router-dom";
import React from "react";
import "./style.css";

export default function Grid (props) {

  const gridList = props.data.map(grid => (
    <div>
    <button className = "grid-cell" key={grid.id}>
    <Link to={`/forums/${grid.id}`}>Week {grid.id}</Link>
    </button>
     </div>
     ));
     
  return (
    <div>
    <h1 className = "grid-title">School of Code Survival Guide</h1>
    <h2 className = "grid-subtitle">Click on a week to see the forum</h2>
    <div className = "grid-container">
{gridList}
    </div>
    </div>
  )
}

//  import React from "react";
// import Square from "../Square";


//   return <div>{gridList}</div>;
// }