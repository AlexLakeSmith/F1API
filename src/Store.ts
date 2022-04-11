import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // for now leave blank.
  },
});

// The state of our above application, whenever we want to access the type we can access this.
export type RootState = ReturnType<typeof store.getState>;
// Dispatch type. 
export type AppDispatch = typeof store.dispatch;
