import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
    date: moment(new Date()).format("YYYY-MM-DD"),
    order: 'my habits order'


};

// Storing User details
export const headerStatusSlice = createSlice({
  name: "headerStatus",
  initialState,
  reducers: {
    updateDate(state, action){
        state.date = action.payload?.newDate
    },
    updateOrder(state,action){
        state.order = action.payload?.order
    }
  }
});

// Action creators are generated for each case reducer function
export const { updateDate , updateOrder } = headerStatusSlice.actions;

export default headerStatusSlice.reducer;
