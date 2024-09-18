import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "./redux/user/store";

export function PrivateRoute({ children }) {
  const user = useSelector((state: RootState) => state.login.userLogin);

  return user?.password != "" ? children : <Navigate to={"/"} />;
}
