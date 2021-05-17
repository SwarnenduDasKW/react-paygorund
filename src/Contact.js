import React, { useState } from "react";

import "./App.css";

function Contact() {
    const [orig, setOrig] = useState(0);
    console.log("Begin - orig", orig);
    const handleClick = () => {
        console.log("Begin - handleClick", orig);
        setOrig(() => orig + 1);
        console.log("End - handleClick", orig);
    };
    return (
        <div className="contact">
            <h1>Contact us</h1>
            <button onClick={handleClick}>Change State</button>
            {console.log("In the Component", orig)}
        </div>
    );
}

export default Contact;
