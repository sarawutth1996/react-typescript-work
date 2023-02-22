import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard-page";
import Login from "./pages/login-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
