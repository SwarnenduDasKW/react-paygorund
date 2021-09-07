/**
 *
 * CREATE A REACT REDUX SAGE PAGE WITH UNSPLASH API. Unsplash password: Kolkata1
 *
 */

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import imagesSaga from "../sagas";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    sagaMiddleware.run(imagesSaga);
    return store;
};

export default configureStore;
