import React, { useState } from "react";
import { connect } from "react-redux";

function DR(props) {
  return (
    <div style={{ border: "2px solid green", width: "560px", height: "100px" }}>
      <h5 style={{ color: "green" }}>This is Component D</h5>
      <p>{`Count: ${props.counter}`}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(DR);
