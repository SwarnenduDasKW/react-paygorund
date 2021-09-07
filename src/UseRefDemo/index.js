import React, { useState, useEffect, useRef } from "react";
import moment from "moment";

/**
 *
 * @returns
 * In React you have access to the virtual DOM but you cannot change the actual DOM. You can't access the actual DOM element.
 * JSX you write will make the translation from react element to DOM element.
 *
 * Another use case would be to store a value in the ref and compare it with the original value making sure multiples copies
 * of the value is not created every time the component is rendered. In the below example the time is kept in ref when the
 * component is loaded. Now in the useEffect a timer is started which which compares the current time against the ref time
 * and if it's more than 30 sec then alert is shown.
 *
 */

function Index() {
    const time = useRef(Date.now());
    console.log("original.time --> time", time);

    const [color, setColor] = useState("red");

    // Creating a ref. This gives a ref back but it's not assigned to any control yet. In the JSX the input has a prop called
    // ref and that is set to inputRef
    const inputRef = useRef();
    console.log("useRefDemo --> inputRef", inputRef);

    const btnRef = useRef();
    const h2Ref = useRef();
    // Once the inoutRef is attached to the input control, it can access few properties of the control
    // whatever is stored within a ref gets stored in the current props.
    useEffect(() => {
        console.log("useRefDemo --> inputRef before focus", inputRef);
        inputRef.current.focus();
        console.log("useRefDemo --> inputRef after focus", inputRef);
        console.log("useRefDemo --> btnRef", btnRef);

        setInterval(() => {
            if (moment().diff(time.current, "seconds") > 60) {
                console.log("moment.diff --> time.current", time.current);
                alert("You are in this page for more than 60 seconds");
            }
            console.log("setInterval --> time", Date.now());
        }, 1000 * 60);
    }, []);

    const handleClick = () => {
        btnRef.current.innerText = "Button Text Changed!!";
    };

    return (
        <div>
            <h1>useRef DEMO</h1>
            <label>Focus With useRef: </label>
            <input ref={inputRef} type="text"></input>
            {console.log("useRefDemo --> inputRef (In JSX)", inputRef)}
            <br />
            <label>No focus: </label>
            <input type="text" />
            <br />
            <button onClick={handleClick}>Change Button Text</button>
            <br />
            <button ref={btnRef} style={{ color: color }}>
                A Red Button
            </button>
            <br />
            <h2 ref={h2Ref}>You are in this page for more than 60 seconds</h2>
        </div>
    );
}

export default Index;
