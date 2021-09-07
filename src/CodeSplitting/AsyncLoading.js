import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/**
 * lazy is used here to import dynamically. Generally in JS once you do a import as soon as the line is compiled the component is loaded point in time.
 * import function returns a promise which resolved the component that we trying to import asynchronously.
 * Now the problem is the Route component of React can only route to the components what are loaded right now. It cannot render some unresolved or
 * unfulfilled promise.
 * This is where Suspense helps. So until the component is loaded Suspense will give a fallback if the component is not loaded within a certain period of time.
 * Webpack is aware of these lazy and Suspense syntax and what it will do is instead of creating a single bundle it will make separate bundles for each components.
 *
 */

const CreateRoom = lazy(() => import("./CreateRoom"));
const Room = lazy(() => import("./Room"));

function AsyncLoading() {
    return (
        <Router>
            <h1>Code splitting using Lazy and Suspense</h1>
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route path="/" exact component={CreateRoom} />
                    <Route path="/room/:roomId" component={Room} />
                </Suspense>
            </Switch>
        </Router>
    );
}

export default AsyncLoading;
