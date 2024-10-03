import { createBrowserRouter, Outlet } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import GuestLayout from "./Layouts/GuestLayout";
import Dashboard from "./Pages/Dashboard";
import CategoryPage from "./Pages/CategoryPage";
import ProductPage from "./Pages/ProductPage";
import DefaultLayout from "./Layouts/DefaultLayout";
import TestApi from "./Pages/TestApi";
import PaymentPage from "./Pages/PaymentPage";
import SubCategoryPage from "./Pages/SubCategoryPage";
import NotFoundPage from "./Pages/NotFoundPage";
import WishlistPage from "./Pages/WishlistPage";
import HistoryPage from "./Pages/HistoryPage";

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
        element: (
          <div>
            <Outlet />
          </div>
        ),
        children: [
          {
            path: "",
            element: <CategoryPage />,
          },
          {
            path: ":subcategory",
            element: <SubCategoryPage />,
          },
        ],
      },

      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
      {
        path: "testApi",
        element: <TestApi />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
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
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
