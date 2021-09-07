import React, { useEffect, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
    Link,
    useHistory,
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import About from "./About";
import Button from "@material-ui/core/Button";
import Contact from "./Contact";
import { AppContext } from "./AppContext";
import Facts from "./Facts";
import DemoHome from "./Demographic/DemoHome";
import Demographic from "./Demographic/Demographic";
import Employment from "./Demographic/Employment";
import ImmerDemo from "./ImmerDemo";
import HigherOrderComponent from "./HigherOrderComponent";
import NestedObjects from "./NestedObjects";
import RenderProps from "./RenderProps";
import UseRefDemo from "./UseRefDemo";
import PageNotFound from "./PageNotFound";
import AboutMe from "./AboutMe";
import Home from "./Home";
import history from "./history";
import Saga from "./Saga";
import { Provider } from "react-redux";

import "./App.css";

function Welcome() {
    let match = useRouteMatch();
    useEffect(() => {
        // console.log("Welcome --> historyUse", historyUse);
    }, []);

    const { appData } = useContext(AppContext);

    return (
        <div className="welcome">
            {/* <h1>Welcome</h1> */}
            {/* <Button variant="contained" color="primary" onClick={handleClickAbout}>
        About
      </Button>
      <Button variant="contained" color="primary" onClick={handleClickContact}>
        Contact
      </Button> */}

            <AppBar position="static">
                <Toolbar>
                    <Link className="welcome__link" to={`${match.url}/welcome`}>
                        Home
                    </Link>
                    <Link className="welcome__link" to={`${match.url}/facts`}>
                        Facts
                    </Link>
                    <Link
                        className="welcome__link"
                        to={`${match.url}/immerdemo`}
                    >
                        Immer
                    </Link>
                    <Link className="welcome__link" to={`${match.url}/hoc`}>
                        Higher Order Component
                    </Link>
                    <Link
                        className="welcome__link"
                        to={`${match.url}/renderprops`}
                    >
                        Render Props
                    </Link>
                    <Link className="welcome__link" to={`${match.url}/useref`}>
                        UseRef Demo
                    </Link>
                    <Link
                        className="welcome__link"
                        to={`${match.url}/nestedobjects`}
                    >
                        NestedObjects
                    </Link>

                    <Link
                        className="welcome__link"
                        to={`${match.url}/demohome`}
                    >
                        Demographic
                    </Link>
                    <Link
                        className="welcome__link"
                        to={`${match.url}/unsplashsaga`}
                    >
                        Unsplash Saga
                    </Link>
                    <Link
                        className="welcome__link"
                        to={`${match.url}/about/me`}
                    >
                        About Me
                    </Link>
                    <Link className="welcome__link" to={`${match.url}/about`}>
                        About
                    </Link>

                    <Link className="welcome__link" to={`${match.url}/contact`}>
                        Contact
                    </Link>

                    <IconButton
                        color="secondary"
                        onClick={() => history.goBack()}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route exact path={`${match.url}/about/me`}>
                    <AboutMe />
                </Route>
                <Route exact path={`${match.url}/about`}>
                    <About />
                </Route>

                <Route exact path={`${match.url}/contact`}>
                    <Contact />
                </Route>
                <Route path={`${match.url}/facts`}>
                    <Facts />
                </Route>
                <Route exact path={`${match.url}/immerdemo`}>
                    <ImmerDemo />
                </Route>

                <Route path={`${match.url}/hoc`}>
                    <HigherOrderComponent />
                </Route>
                <Route exact path={`${match.url}/renderprops`}>
                    <RenderProps />
                </Route>
                <Route exact path={`${match.url}/useref`}>
                    <UseRefDemo />
                </Route>
                <Route exact path={`${match.url}/nestedobjects`}>
                    <NestedObjects />
                </Route>

                <Route path={`${match.url}/demohome`}>
                    <DemoHome />
                </Route>
                <Route path={`${match.url}/unsplashsaga`}>
                    <Saga />
                </Route>

                <Route exact>
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}

export default Welcome;
