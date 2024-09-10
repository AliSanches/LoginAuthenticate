import { configureStore } from "@reduxjs/toolkit";
import sliceUser from "./sliceUser";

const store = configureStore({
  reducer: {
    users: sliceUser,
  },
});

export default store;
