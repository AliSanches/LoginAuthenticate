import "./App.css";
import Login from "./pages/Login/Login";
import CreateUser from "./pages/CreateUser/CreateUser";
import ViewUser from "./pages/ViewUser/ViewUser";

import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <ToastContainer />
      <Router>
        <div className="principal">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/view" element={<ViewUser />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
