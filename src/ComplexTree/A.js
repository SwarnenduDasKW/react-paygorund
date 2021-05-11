import React, { useState } from "react";
import "./A.css";
import componentTree from "../assets/componentTree.png";

import B from "./B";
import C from "./C";

function A() {
    //Declare the state in a common parent and pass the state down through props
    const [countA, setCountA] = useState(0);

    const handleClickB = () => {
        setCountA(() => countA + 1);
    };

    return (
        <div
            className="a"
            style={{ border: "2px solid red", width: "600px", height: "900px" }}
        >
            <div className="a__main">
                <h4 style={{ color: "red" }}>This is Component A</h4>
                <p>{`Count: ${countA}`}</p>
                <B increaseCounter={handleClickB} />
                <C count={countA} />
            </div>
            <div className="a__flow">
                <img
                    className="ar__flow__img"
                    src={componentTree}
                    alt="componentTree"
                />
            </div>
        </div>
    );
}

export default A;
