import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/Mainlayout";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;
