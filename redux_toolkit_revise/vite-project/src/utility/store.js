import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./couterSlice";

const store=configureStore({
    reducer:{
        counter1:counterSlice,
         
    }

});
export default store