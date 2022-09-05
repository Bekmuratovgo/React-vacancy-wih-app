import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataSlice from "./DataSlice";

const rootReducer = combineReducers({
    dataSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}