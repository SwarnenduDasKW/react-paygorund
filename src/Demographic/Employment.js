import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { Link, useHistory } from "react-router-dom";
import Demographic from "./Demographic";
import BackNext from "../BackNext";

function Employment() {
  const history = useHistory();
  const [employerName, setEmployerName] = useState("");
  const [doj, setDoh] = useState("");
  const [dept, setDept] = useState("");

  const handlePrev = () => {
    console.log("Employment -> handlePrev");
    history.push("/demographic");
  };

  return (
    <div>
      <h1>Employment Details</h1>
      <TextField
        id="companyName"
        label="Employer Name"
        onChange={(e) => setEmployerName(e.target.value)}
      />
      <TextField id="dateOfJoining" label="Date of Joining" />
      <TextField id="department" label="Department" />
      <BackNext prev={handlePrev} />
    </div>
  );
}

export default Employment;
