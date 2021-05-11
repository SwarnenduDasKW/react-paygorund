import React from "react";
import { connect } from "react-redux";
import { increment } from "../redux/actionMethod";

import GR from "./GR";

function BR(props) {
    return (
        <div
            style={{
                border: "2px solid blue",
                width: "580px",
                height: "400px",
            }}
        >
            <h4 style={{ color: "blue" }}>This is Component B</h4>
            <button onClick={props.increase}>Increase Counter D</button>
            <GR />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch(increment),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BR);
