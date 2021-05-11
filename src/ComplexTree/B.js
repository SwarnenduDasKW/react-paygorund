import React from "react";
import G from "./G";

function B(props) {
  return (
    <div style={{ border: "2px solid blue", width: "580px", height: "400px" }}>
      <h4 style={{ color: "blue" }}>This is Component B</h4>
      <button onClick={props.increaseCounter}>Increase Counter D</button>
      <G increaseCounter={props.increaseCounter} />
    </div>
  );
}

export default B;
