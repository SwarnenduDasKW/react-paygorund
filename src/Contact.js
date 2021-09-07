import React, { useState, useEffect } from "react";

import "./App.css";

function Contact() {
    console.log("I am in contact");
    const [orig, setOrig] = useState(0);
    const [count, setCount] = useState(0);
    console.log("count - Begin", count);

    const handleClick = () => {
        setCount(3);
        // console.log("count - 3", count);
        // setCount(count + 2);
        // console.log("count + 2", count);
        setCount((p) => p + 1);

        // setCount(count - 4);
        // console.log("count - 4", count);
        // setCount((p) => p + 6);
        // console.log("count + 6 async", count);
    };

    useEffect(() => {}, []);

    return (
        <div className="contact">
            <h1>Contact us</h1>
            <button onClick={handleClick}>Change State</button>
            {/* {console.log("In the Component", orig)} */}
            <h4>{count}</h4>
        </div>
    );
}

export default Contact;
