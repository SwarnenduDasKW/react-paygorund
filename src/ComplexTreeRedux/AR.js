import React from "react";
import "./ar.css";
import componentTree from "../assets/componentTree.png";

import BR from "./BR";
import CR from "./CR";

function AR() {
    return (
        <div
            className="ar"
            style={{ border: "2px solid red", width: "600px", height: "900px" }}
        >
            <div className="ar__main">
                <h4 style={{ color: "red" }}>
                    This is Component A - Redux Implementation
                </h4>
                <BR />
                <CR />
            </div>
            <div className="ar__flow">
                <img
                    className="ar__flow__img"
                    src={componentTree}
                    alt="componentTree"
                />
            </div>
        </div>
    );
}

export default AR;
