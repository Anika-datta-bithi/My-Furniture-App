import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";

// Defining the router with the routes configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;