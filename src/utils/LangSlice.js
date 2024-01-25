import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "languages",
  initialState: {name:"english"},
  reducers: {
    addLanguages: (state, action) => {
       (state.name = action.payload);
    },
  },
});

export const { addLanguages } = langSlice.actions;
export default langSlice.reducer;
