import React, { useEffect, useContext } from "react";
import { AppContext } from "./AppContext";

import "./App.css";

function About() {
  useEffect(() => {
    console.log("About --> appData", appData);
  }, []);

  const { appData } = useContext(AppContext);

  return (
    <div className="about">
      <h1>About us</h1>
    </div>
  );
}

export default About;
