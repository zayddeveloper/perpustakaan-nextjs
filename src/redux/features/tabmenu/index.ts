// redux/slices/index.ts
import { combineReducers } from "redux";
import tabmenuReducer from "./tabmenuSlice";

// Combine all reducers
const rootReducer = combineReducers({
  counter: tabmenuReducer,
  // add other reducers if needed
});

// Export root reducer
export default rootReducer;

// Define root state type
export type RootState = ReturnType<typeof rootReducer>;
