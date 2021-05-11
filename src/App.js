import React, { useState, useMemo } from "react";
import "./App.css";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./Welcome";
import { AppContext } from "./AppContext";
import PageNotFound from "./PageNotFound";
import DemoHome from "./Demographic/DemoHome";
import A from "./ComplexTree/A";
import AR from "./ComplexTreeRedux/AR";
import { Provider } from "react-redux";
import store from "./redux/store";

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
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/welcome" component={Welcome} />
              <Route exact path="/complextree" component={A} />
              <Route exact path="/complextreeredux" component={AR} />
              <Route>
                <PageNotFound />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
