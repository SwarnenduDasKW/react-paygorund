import React, { useState } from "react";

//This is a higher order component which accepts a Component as an argument
// and retruns a modified component.
// whatever props what was already passed to the component will still remain
// as we have passed {...props} and along with that additional prop hovered
//
function DetectHover(props) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {props.render(hovered)}
        </div>
    );
}

function index(props) {
    function render(hovered) {
        const style = {
            border: "2px dotted navy",
            backgroundColor: hovered
                ? `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
                      Math.random() * 256
                  )}, ${Math.floor(Math.random() * 256)})`
                : "",
        };
        return (
            <div style={style} className="index">
                <h1>RenderProps Demo</h1>
                <p>
                    A higher order component is a function which receives a
                    component as an argument and returns a newly augmented
                    component.
                </p>
                <h2>
                    <i>When you hover over me I will change color randomly</i>
                </h2>
            </div>
        );
    }

    // This returns a component which has a property called render which is a function
    return <DetectHover render={render} />;
}

// detechHover is a function which receives a component as an argument
// and returns a newly augmented component.
// The idea here is to create a modified component which can be used
// in other places as it shares some logic which can be re-used in other places in the app.

export default index;
