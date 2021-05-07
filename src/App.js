import React, { useState, useMemo } from "react";
import "./App.css";
import Login from "./Login";
import Facts from "./Facts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./Welcome";
import { AppContext } from "./AppContext";

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
            <Route path="/welcome" component={Welcome} />
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
