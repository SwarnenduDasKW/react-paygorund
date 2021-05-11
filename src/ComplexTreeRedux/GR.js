import React from "react";
import HR from "./HR";
import IR from "./IR";

function GR(props) {
  return (
    <div style={{ border: "2px solid pink", width: "560px", height: "300px" }}>
      <h6 style={{ color: "pink" }}>This is Component G</h6>
      <HR />
      <IR />
    </div>
  );
}

export default GR;
