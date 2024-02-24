import { configureStore } from "@reduxjs/toolkit";
import { albumReducer } from "../reducers/albumListReducer";
import { thunk } from "redux-thunk";



export const store = configureStore({
    reducer:{
        albumReducer,
        middleware: [thunk]

    },
    })