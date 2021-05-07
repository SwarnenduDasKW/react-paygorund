import React, { useState, useMemo } from "react";
import "./App.css";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./Welcome";
import { AppContext } from "./AppContext";
import PageNotFound from "./PageNotFound";
import DemoHome from "./Demographic/DemoHome";

function App() {
  const [appData, setAppData] = useState({});

  // const appProvider = { appData, setAppData };
  const appProvider = useMemo(() => ({ appData, setAppData }), [
    appData,
    setAppData,
  ]);

  return (
    <div className="App">
      <AppContext.Provider value={appProvider}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/welcome" component={Welcome} />
            <Route path="/demohome" component={DemoHome} />
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
