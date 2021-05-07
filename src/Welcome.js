import React, { useEffect, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Link,
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import About from "./About";
import Button from "@material-ui/core/Button";
import Contact from "./Contact";
import { AppContext } from "./AppContext";

import "./App.css";

function Welcome() {
  useEffect(() => {
    console.log("Welcome --> appData", appData);
  }, []);

  const history = useHistory();
  const { appData } = useContext(AppContext);

  const handleClickAbout = () => {
    console.log("Welcome -->handleClickAbout");
    history.push("/about");
  };
  const handleClickContact = () => {
    console.log("Welcome -->handleClickContact");
    history.push("/contact");
  };
  return (
    <div className="welcome">
      {/* <h1>Welcome</h1> */}
      {/* <Button variant="contained" color="primary" onClick={handleClickAbout}>
        About
      </Button>
      <Button variant="contained" color="primary" onClick={handleClickContact}>
        Contact
      </Button> */}
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Link className="welcome__link" to="/welcome">
              Home
            </Link>
            <Link className="welcome__link" to="/about">
              About
            </Link>
            <Link className="welcome__link" to="/contact">
              Contact
            </Link>
            <IconButton color="secondary" onClick={() => history.goBack()}>
              <ArrowBackIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Welcome;
