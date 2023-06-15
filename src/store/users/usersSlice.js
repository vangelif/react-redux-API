import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=35");
      // console.log(response);
      const data = response.json();
      return data;
    } catch (error) {
      return rejectWithValue("failed to fetch");
    }
  }
);

const initialState = {
  users: [],
  isLoading: true,
  error: undefined,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      //   console.log(action.payload);
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      //   console.log(action.payload);
    });
  },
});

export const { someAction } = userSlice.actions;
export default userSlice.reducer;

