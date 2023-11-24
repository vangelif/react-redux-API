// STEP ONE: import configureStore from redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";

// STEP TWO: build the store with the reducer,
// and initial state for handling the users' actions
const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;

