import React from "react";
import { connect } from "react-redux";
import { decrement } from "../redux/actionMethod";

function IR(props) {
    return (
        <div
            style={{
                border: "2px solid brown",
                width: "540px",
                height: "100px",
            }}
        >
            <p style={{ color: "brown" }}>This is Component I</p>
            <button onClick={props.decrease}>Decrease Counter</button>
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
        decrease: () => dispatch(decrement),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IR);
