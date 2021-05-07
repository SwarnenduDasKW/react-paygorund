import React, { useEffect, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import Welcome from "./Welcome";
import "./App.css";
import Card from "@material-ui/core/Card";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { AppContext } from "./AppContext";

function Login() {
  const history = useHistory();
  const { appData, setAppData } = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      confirmAgreement: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setAppData(values);
      formik.resetForm();
    },
  });
  const handleClick = () => {
    history.push("/welcome");
  };
  return (
    <div>
      <Card className="app__login">
        <form className="card__login" onSubmit={formik.handleSubmit}>
          <h1>Log me in...</h1>

          <TextField
            id="email"
            label="Email"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <TextField
            id="password"
            label="Password"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <TextField
            id="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          <FormControlLabel
            control={
              <Checkbox
                id="confirmAgreement"
                color="primary"
                checked={formik.values.confirmAgreement}
                onChange={formik.handleChange}
                value={formik.values.confirmAgreement}
              />
            }
            label="Do you agree to the terms and conditions?"
          />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <hr />
          <Button variant="contained" color="primary" onClick={handleClick}>
            Go
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Login;
