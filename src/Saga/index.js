import React from "react";
import Header from "./Header";
import ImageGrid from "./ImageGrid";
import { Provider } from "react-redux";
import configureStore from "./store";

function index() {
    const store = configureStore();
    return (
        <Provider store={store}>
            <div>
                <Header />
                <ImageGrid />
            </div>
        </Provider>
    );
}

export default index;
