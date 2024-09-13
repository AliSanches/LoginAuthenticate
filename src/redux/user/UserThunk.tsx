import { createAsyncThunk } from "@reduxjs/toolkit";
import { Users } from "./sliceUser";

import axios from "axios";

export const createUser = createAsyncThunk<Users, Users>(
  "user/create",
  async (userData) => {
    const response = await axios.post<Users>(
      JSON.stringify(import.meta.env) + "/user/create",
      userData
    );
    return response.data;
  }
);
