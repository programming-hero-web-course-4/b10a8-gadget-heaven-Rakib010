import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/Mainlayout";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [],
  },
  {
    path: "/statistics",
    element: <Statistics></Statistics>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
]);

export default router;
