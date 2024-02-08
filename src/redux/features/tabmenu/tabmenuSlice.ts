// redux/slices/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define state type
interface TabmenuState {
  myVariable: string;
}

// Define initial state
const initialState: TabmenuState = {
  myVariable: "Nilai Awal",
};

// Create slice
const tabmenuState = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setMyVariable: (state, action: PayloadAction<string>) => {
      state.myVariable = action.payload;
    },
  },
});

// Export actions
export const { setMyVariable } = tabmenuState.actions;

// Export reducer
export default tabmenuState.reducer;
