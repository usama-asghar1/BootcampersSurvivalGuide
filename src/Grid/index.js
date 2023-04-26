import {Link} from "react-router-dom";

export default function Grid (props) {

  const gridList = props.data.map(grid => (
    <div>
    <button key={grid.id}>
    <Link to={`/forums/${grid.id}`}>Week {grid.id}</Link>
    </button>
     </div>
     ));
     
  return (
    <div>
{gridList}
    </div>
  )
}

//  import React from "react";
// import Square from "../Square";


//   return <div>{gridList}</div>;
// }