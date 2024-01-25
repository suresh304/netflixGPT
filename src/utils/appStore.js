import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice"
import movieSliceReducer from "./movieSlice"
import gptSlice from "./gptSlice"
import langSlice from "./LangSlice"

 const appstore = configureStore({
    reducer:{
     user:userSliceReducer,
     movies:movieSliceReducer,
     gpt:gptSlice,
     lang:langSlice
    }

})

export default appstore