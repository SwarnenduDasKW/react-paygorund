import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import WelcomePageRoutes from "./WelcomePageRoutes";
import PageNotFound from "../PageNotFound";
import Unauthorized from "../Unauthorized";
import Welcome2 from "../Welcome2";

function WelcomeRoute() {
    useEffect(() => {
        console.log("WelcomeRoute --> I am in WelcomeRoute");
    }, []);

    return (
        <Switch>
            <Route path="/welcomehome" component={Welcome2} />
            <Route path="/unauthorized" component={Unauthorized} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    );
}

export default WelcomeRoute;
