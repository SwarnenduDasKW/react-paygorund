import React from "react";
import { Route } from "react-router-dom";
import Unauthorized from "../Unauthorized";

const GuardedRoute = ({ component: Component, ...rest }) => {
    console.log("Guarded Route --> Authentication", rest.isAuthenticated);
    return (
        <Route
            {...rest}
            render={(props) =>
                rest.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Unauthorized />
                )
            }
        />
    );
};

export default GuardedRoute;
