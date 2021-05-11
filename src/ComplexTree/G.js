import React from "react";
import H from "./H";
import I from "./I";

function G(props) {
  return (
    <div style={{ border: "2px solid pink", width: "560px", height: "300px" }}>
      <h6 style={{ color: "pink" }}>This is Component G</h6>
      <H />
      <I increaseCounter={props.increaseCounter} />
    </div>
  );
}

export default G;
