import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

function BackNext(props) {
  const history = useHistory();
  const goNext = () => {
    console.log("BackNext -> goNext");
    props.next();
    //history.goNext();
  };
  const goPrev = () => {
    console.log("BackNext -> goNext");
    props.prev();
    //history.goBack();
  };
  return (
    <div>
      <Button variant="contained" color="primary" onClick={goPrev}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={goNext}>
        Next
      </Button>
    </div>
  );
}

export default BackNext;
