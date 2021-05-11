import React from "react";
import D from "./D";
import E from "./E";

function C(props) {
  return (
    <div style={{ border: "2px solid cyan", width: "580px", height: "400px" }}>
      <h4 style={{ color: "cyan" }}>This is Component C</h4>
      <p>{`Count: ${props.count}`}</p>
      <D count={props.count} />
      <E />
    </div>
  );
}

export default C;
