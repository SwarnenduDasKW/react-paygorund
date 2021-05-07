import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

function Employment() {
  const [employerName, setEmployerName] = useState("");
  const [doj, setDoh] = useState("");
  const [dept, setDept] = useState("");

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
    </div>
  );
}

export default Employment;
