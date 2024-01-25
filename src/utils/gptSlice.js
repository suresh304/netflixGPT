import {createSlice} from "@reduxjs/toolkit"
const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptSearch:false
    },
    reducers:{
        handleGptSearch:(state,action)=>{
            state.gptSearch=action.payload

        }
    }
})

export const {handleGptSearch } = gptSlice.actions
export default gptSlice.reducer