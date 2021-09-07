import React, { useState, useEffect } from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import { getAuthStatus } from "./userAuthentication";
import GuardedRoute from "./guardedRoute";
import Welcome2 from "../Welcome2";
import Facts from "../Facts";
import About from "../About";
import AboutMe from "../AboutMe";

function WelcomePageRoutes() {
    let { path, url } = useRouteMatch();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        console.log("WelcomePageRoutes --> path and url ", path, url);
        setIsAuthenticated(getAuthStatus);
    }, []);

    return (
        <Switch>
            <Route exact path={`${path}`} component={() => <Welcome2 />} />
            {/* <GuardedRoute
                exact
                path={`${path}facts`}
                component={() => <Facts />}
                isAuthenticated={isAuthenticated}
            />
            <GuardedRoute
                exact
                path={`${path}about`}
                component={() => <About />}
                isAuthenticated={isAuthenticated}
            />
            <GuardedRoute
                exact
                path={`${path}about/me`}
                component={() => <AboutMe />}
                isAuthenticated={isAuthenticated}
            /> */}
        </Switch>
    );
}

export default WelcomePageRoutes;
