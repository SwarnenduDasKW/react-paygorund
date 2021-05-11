import React from "react";

function I(props) {
  return (
    <div style={{ border: "2px solid brown", width: "540px", height: "100px" }}>
      <p style={{ color: "brown" }}>This is Component I</p>
      <button onClick={props.increaseCounter}>Increase counter D</button>
    </div>
  );
}

export default I;
