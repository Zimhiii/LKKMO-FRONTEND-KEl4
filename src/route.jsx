import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import GuestLayout from "./Layouts/GuestLayout";
import Dashboard from "./Pages/Dashboard";
import CategoryPage from "./Pages/CategoryPage";
import ProductPage from "./Pages/ProductPage";
import DefaultLayout from "./Layouts/DefaultLayout";
import TestApi from "./Pages/TestApi";
import PaymentPage from "./Pages/PaymentPage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/category",
        element: <CategoryPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "testApi",
        element: <TestApi />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
