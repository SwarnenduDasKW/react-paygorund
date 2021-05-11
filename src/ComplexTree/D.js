import React, { useState } from "react";

function D(props) {
  return (
    <div style={{ border: "2px solid green", width: "560px", height: "100px" }}>
      <h5 style={{ color: "green" }}>This is Component D</h5>
      <label>{`Count: ${props.count}`}</label>
    </div>
  );
}

export default D;
