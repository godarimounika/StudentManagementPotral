import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./CreateSlice"; 


const store = configureStore({
    reducer:{
         student:studentReducer
    }
})
export default store