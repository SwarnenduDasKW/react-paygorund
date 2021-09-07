import { IMAGES } from "../Constants/sagaconstants";

const imagesReducer = (state = [], action) => {
    console.log("imagesReducer --> state/action.type --> ", state, action.type);
    if (action.type === IMAGES.LOAD_SUCCESS) {
        return [...state, ...action.images];
    }

    return state;
};

export default imagesReducer;
