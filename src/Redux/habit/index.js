import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  habit : null,
};

// Storing User details
export const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    removeSelectHabit: (state) => {
        state.habit = null;
    },
    selectHabit: (state, action ) => {
        const habit = action.payload?.habit;
        state.habit = habit;
    }

    
  },
});

// Action creators are generated for each case reducer function
export const { removeSelectHabit , selectHabit } = habitSlice.actions;

export default habitSlice.reducer;
