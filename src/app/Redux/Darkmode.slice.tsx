import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  Darkmmode: false,
};
export const DarkmodeSlice = createSlice({
  name: "Darkmmode",
  initialState,

  reducers: {
    // function to turn on the darkmode
    darkmodeon: (state, action) => {
        state.Darkmode = action.payload;
    },
    
    // function to turn off the darkmode
    darkmodeoff: (state, action) => {
      state.Darkmode = action.payload;
    },
  },
});

export const { darkmodeoff, darkmodeon } = DarkmodeSlice.actions;
export default DarkmodeSlice.reducer;
