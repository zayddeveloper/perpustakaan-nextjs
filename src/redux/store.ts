import { configureStore, createStore } from "@reduxjs/toolkit";
import rootReducer from "./features/tabmenu";

const makeStore = () => {
  return configureStore({
    reducer: { rootReducer },
  });
};

// Create and export Redux store
const store = createStore(rootReducer);

export default store;

// Define root state type
export type RootState = ReturnType<typeof rootReducer>;

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
