import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Mainlayout";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Products from "../components/Products";
import Statistics from "../Pages/Statistics";
import ProductDetails from "../Pages/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <Products />,
            loader: () => fetch("../product.json"),
          },
          {
            path: "/category/:category",
            element: <Products />,
            loader: () => fetch("../product.json"),
          },
        ],
      },
      {
        path: "/product/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../product.json"),
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
