import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";
import AboutMe from "./AboutMe";
import HigherOrderComponent from "./HigherOrderComponent";
import Facts from "./Facts";
import Contact from "./Contact";
import GuardedRoute from "./Routes/guardedRoute";
import { getAuthStatus } from "./Routes/userAuthentication";
import PageNotFound from "./PageNotFound";

function Welcome2() {
    let { path, url } = useRouteMatch();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        console.log("Welcome2 --> ", path, url);
        setIsAuthenticated(getAuthStatus);
    }, []);

    return (
        <div>
            <h1> Welcome 2 </h1>
            <nav>
                <ul>
                    <li>
                        <Link to={`${path}/contact`}>Contact</Link>
                    </li>
                    <li>
                        <Link to={`${url}/hoc`}>Hoc</Link>
                    </li>
                    <li>
                        <Link to={`${url}/facts`}>Cat Facts</Link>
                    </li>
                </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

            <Switch>
                <GuardedRoute
                    exact
                    path={`${path}/contact`}
                    component={() => <Contact />}
                    isAuthenticated={isAuthenticated}
                />
                <GuardedRoute
                    exact
                    path={`${path}/hoc`}
                    component={() => <HigherOrderComponent />}
                    isAuthenticated={isAuthenticated}
                />
                <GuardedRoute
                    exact
                    path={`${path}/facts`}
                    component={() => <Facts />}
                    isAuthenticated={isAuthenticated}
                />
            </Switch>
        </div>
    );
}

export default Welcome2;
