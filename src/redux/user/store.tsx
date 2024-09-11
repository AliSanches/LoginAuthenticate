import { configureStore } from "@reduxjs/toolkit";
import sliceUser from "./sliceUser";

const store = configureStore({
  reducer: {
    users: sliceUser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
