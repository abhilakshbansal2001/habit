import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import habitReducer from './habit'
import headerStatusReducer from './headerStatus'

export default configureStore({
  reducer: {
    user: userReducer,
    habit : habitReducer,
    headerStatus : headerStatusReducer,
  }
})