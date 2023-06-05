import { configureStore } from "@reduxjs/toolkit";
import prescSclice from "./prescription-slice";
import personSclice from "./person-slice";

const store=configureStore({
    reducer:{ 
        pres: prescSclice.reducer,
        person: personSclice.reducer
    }
});

export default store;