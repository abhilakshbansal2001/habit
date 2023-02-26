import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { addUser, getDefault, updateDefault, updateUserList } from "../../Helpers/LocalStorage";

const initialState = {
  user: getDefault() || null,
  selectedHabit: null,
};

// Storing User details
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
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
            areas: {},
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
        state.user.areas[area.id] = area;
        addUser(state.user.name ,state.user )
        updateDefault(state.user)
    },
    addHabit: (state, action) => {
        const habit = action.payload?.habit;
        const idArea = action.payload?.idArea;
        habit.id = uuidv4();

        if(idArea)
            state.user?.habits?.unshift(habit);
        else
            state.user.areas[idArea].habits?.unshift(habit);

        // Update user in local storage
        addUser(state.user.name, state.user);
    },

  },
});

// Action creators are generated for each case reducer function
export const { updateUser , addNewUser , selectUser , addArea , addHabit } = userSlice.actions;

export default userSlice.reducer;
