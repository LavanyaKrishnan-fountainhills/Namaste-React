import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./userThunk";
// thunk which we are created in thunk file
// you should import the named utility function

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    users: [],
    error: null,
    value:0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        (state.isLoading = true), (state.error = null);
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        (state.isLoading = false), (state.users = action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        (state.isLoading = false),
          (state.error = action.error.message || "Failed to fetch users");
      });
  },
});


export const { increment, decrement, reset } = userSlice.actions;
export default userSlice.reducer;






