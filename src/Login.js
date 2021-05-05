import React from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      confirmAgreement: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="app__login">
          <h1>Login Form</h1>
          <label htmlFor="firstName">Email</label>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="firstName">Password</label>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <label htmlFor="firstName">Confirm Password</label>
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          <label htmlFor="firstName">Do you agree?</label>
          <Checkbox
            id="confirmAgreement"
            color="primary"
            checked={formik.values.confirmAgreement}
            onChange={formik.handleChange}
            value={formik.values.confirmAgreement}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
