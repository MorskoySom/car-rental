import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
    favouriteCar: {
        cars: 0,
    },
}
// root reducer
const rootReducer = (state = initialState, action) => {
    return state;
}
const enhancer = devToolsEnhancer();
// export const store = configureStore(rootReducer, enhancer);

export const store = configureStore({
    // reducer: {
    //     a: aReducer,
    //     b: bReducer
    // }
});