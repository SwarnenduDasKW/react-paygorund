import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateRoom from "./CreateRoom";
import Room from "./Room";
/**
 * The idea of the Code Splitting is When you have a files with huge lines of codes and you don't want the single page application to
 * to load the code unnecessarily for scenarios where your users might not even use the functionality.
 * Let's say you have chat application where you have a Create Room page and and Room page. Now the create room file(component) is 25
 * lines of code where as Room is 1000 lines of code. The user may visit the create room page but never creates a room. It doesn't make
 * sense for the user to download all the codes pertaining to the room.
 * When the application is given a build it will generate a bundle file [main.#####.chunk.js] which is huge if code splitting is not done. But if you use
 * code splitting then the bundle size will be less and it will take much lesser time to load.
 *
 *
 */

function index() {
    return (
        <Router>
            <h1>Code splitting using Lazy and Suspense</h1>
            <Switch>
                <Route path="/" exact component={CreateRoom} />
                <Route path="/room/:roomId" component={Room} />
            </Switch>
        </Router>
    );
}

export default index;
