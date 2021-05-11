import { createStore } from "redux";
import reducer from "./reducer";

//Pass the name of the reducer here
const store = createStore(reducer);

export default store;
