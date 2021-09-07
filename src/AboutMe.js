import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function AboutMe() {
    const history = useHistory();
    return (
        <div>
            <h1>This is Swarnendu!</h1>
            <h2>I live in Kitchener</h2>
        </div>
    );
}

export default AboutMe;
