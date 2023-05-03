import { createSlice, current } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      let index = current(state).findIndex((x) => {
        return x.email === action.payload;
      });
      state.splice(index, 1);
    },
    deleteAllUser(state, action) {
      return [];
    }
  }
});

export default userSlice.reducer;
export const { addUser, deleteUser, deleteAllUser } = userSlice.actions;
