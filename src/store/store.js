// STEP ONE: import configureStore from redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";

// STEP TWO: build the store with the reducer
// explanation: reducer object passes to configureStore
// each property represents a slice of the overall state
const store = configureStore({
  reducer: {
    // "users" slice uses usersReducer to manage its state
    users: usersReducer,
  },
});

export default store;

