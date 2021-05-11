import React from "react";
import DR from "./DR";
import ER from "./ER";

function CR(props) {
  return (
    <div style={{ border: "2px solid cyan", width: "580px", height: "400px" }}>
      <h4 style={{ color: "cyan" }}>This is Component C</h4>

      <DR />
      <ER />
    </div>
  );
}

export default CR;
