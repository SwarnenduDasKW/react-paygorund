import React, { useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import { useHistory } from "react-router-dom";

import "./App.css";

function About() {
    const history = useHistory();

    return (
        <div className="about">
            <h1>About us</h1>
        </div>
    );
}

export default About;
