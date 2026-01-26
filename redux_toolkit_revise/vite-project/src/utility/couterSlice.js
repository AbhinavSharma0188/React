import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{
       value:0

    },
    reducers:{
        increment:(state,action)=>{
            state.value=state.value+1;
          
        },
        decrement:()=>{}


    }
})

export const {increment,decrement}=counterSlice.actions;
export default counterSlice.reducer