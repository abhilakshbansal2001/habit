import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  habits: [],
  selectedHabitID: null
};

// Storing User details
export const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {

    addHabit: (state, action) => {
        let habit = action.payload?.habit;
        habit = {
            ...habit,
            id: uuidv4()
        }
        state.habits.unshift(habit);
        localStorage.setItem(u.name, JSON.stringify(u));
    },
    updateUser: (state, action) => {
        let u = action.payload?.user;
        state.user = u;
        localStorage.setItem(u.name, JSON.stringify(u));
    },
    addNewUser: (state , action) => {
        const u = action.payload?.user;
        const updatedU = {
            id:uuidv4(),
            ...u,
            habits:[],
            areas: [],
        }

        // Create a new user 
        addUser(u.name, updatedU);

        // Change Default user for next time
        updateDefault(updatedU);

        updateUserList(u.name)

        state.user = updatedU
    },
    selectUser: (state , action) => {
        const name = action.payload?.name
        const user = JSON.parse(localStorage.getItem(name))
        localStorage.setItem("defaultUser" , JSON.stringify(user))
        state.user = user;
    },
    addArea: (state, action) => {
        const areaName = action.payload?.name;
        const area = {
            id: uuidv4(),
            name: areaName,
            habits:[]
        }
        const updatedUser = state.user.areas.push(area);
        addUser(state.user.name ,state.user )
        updateDefault(state.user)
    }

  },
});

// Action creators are generated for each case reducer function
export const { updateUser , addNewUser , selectUser , addArea } = habitSlice.actions;

export default habitSlice.reducer;
