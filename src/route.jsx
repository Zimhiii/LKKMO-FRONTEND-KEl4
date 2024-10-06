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
import ProfilePage from "./Pages/ProfilePage";
import PasswordPage from "./Pages/PasswordPage";
import CategoryLayout from "./Layouts/CategoryLayout";
import ContainerContent from "./Components/CategoryComponents/ContainerContent";
import AboutMe from "./Pages/AboutMePage";
import AdminLayout from "./Layouts/AdminLayout";
import SettingLayout from "./Layouts/SettingLayout";

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
        element: <CategoryLayout />,
        children: [
          {
            path: "",
            element: <CategoryPage />,
            children: [
              {
                path: ":category",
                element: <CategoryPage />,
                children: [
                  {
                    path: "",
                    element: <ContainerContent />,
                  },
                  {
                    path: ":subcategory",
                    element: <SubCategoryPage />,
                  },
                ],
              },
            ],
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
      {
        path: "settinguser",
        element: <SettingLayout />,
        children: [
          {
            path: "/settinguser/profileuser",
            element: <ProfilePage />,
          },
          {
            path: "/settinguser/passwordsetting",
            element: <PasswordPage />,
          },
        ],
      },
      {
        path: "aboutme",
        element: <AboutMe />,
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
  {
    path: "/admin",
    element: <AdminLayout />,
  },
]);
