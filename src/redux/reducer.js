import { INCREASE_COUNTER } from "./actionTypes";
import { DECREASE_COUNTER } from "./actionTypes";

const initialValue = { counter: 0 };

const reducer = (state = initialValue, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DECREASE_COUNTER:
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return state;
    }
};

export default reducer;
