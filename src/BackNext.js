import React from "react";
import Button from "@material-ui/core/Button";

function BackNext(props) {
  const goNext = () => {
    console.log("BackNext -> goNext");
    props.next();
  };
  return (
    <div>
      <Button variant="contained" color="primary">
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={goNext}>
        Next
      </Button>
    </div>
  );
}

export default BackNext;
