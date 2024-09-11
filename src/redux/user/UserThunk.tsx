import { createAsyncThunk } from "@reduxjs/toolkit";
import { Users } from "./sliceUser";

import axios from "axios";

export const createUser = createAsyncThunk<Users, Users>(
  "user/create",
  async (userData) => {
    const response = await axios.post<Users>("/user/create", userData);
    return response.data;
  }
);

export const listUser = createAsyncThunk<Users, Users>(
  "user/list",
  async () => {
    const response = await axios.get<Users>("/user/list");
    return response.data;
  }
);
