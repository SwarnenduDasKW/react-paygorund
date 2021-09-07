import React from "react";
import Demographic from "./Demographic";
import Employment from "./Employment";
import BackNext from "../BackNext";
import { Link, useHistory } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
// import { Route, Switch } from "react-router";
import Button from "@material-ui/core/Button";

function DemoHome() {
    let match = useRouteMatch();
    const history = useHistory();
    const handleNext = () => {
        console.log("DemoHome -> handleNext");
        history.push(`${match.url}/demographic`);
    };
    return (
        <div className="demohome">
            <h1>Demographic Data Entry Form</h1>
            <BackNext next={handleNext} />
            <Switch>
                <Route path={`${match.path}/demographic`}>
                    <Demographic />
                </Route>
                <Route path={`${match.path}/employment`}>
                    <Employment />
                </Route>
            </Switch>
            {/* <div>
        <Router>
          <Switch>
            <Route path="/demographic" component={Demographic} />
            <Route path="/employment" component={Employment} />
          </Switch>

          <BackNext next={handleNext} />
        </Router>
      </div> */}
            {/* <Router> */}
            {/* <Link to="/demographic">Demographic</Link> */}
            {/* <Button variant="contained" color="primary" onClick={handleNext}>
          Demo
        </Button>
        <Switch>
          <Route exact path="/demographic">
            <Demographic />
          </Route>
          <Route path="/employment">
            <Employment />
          </Route>
        </Switch>
      </Router>  */}
        </div>
    );
}

export default DemoHome;
