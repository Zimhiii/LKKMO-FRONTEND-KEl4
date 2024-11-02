import { createBrowserRouter, Outlet } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import GuestLayout from "./Layouts/GuestLayout";
import Dashboard from "./Pages/Dashboard";
import CategoryPage from "./Pages/CategoryPage";
import ProductPage from "./Pages/ProductPage";
import DefaultLayout from "./Layouts/DefaultLayout";
import TestApi from "./TestApi/TestApi";
import ApiProduct from "./TestApi/ApiProduct";
import PaymentPage from "./Pages/PaymentPage";
import SubCategoryPage from "./Pages/SubCategoryPage";
import NotFoundPage from "./Pages/NotFoundPage";
import WishlistPage from "./Pages/WishlistPage";
import HistoryPage from "./Pages/HistoryPage";
import ProfilePage from "./Pages/ProfilePage";
import PasswordPage from "./Pages/PasswordPage";
import CategoryLayout from "./Layouts/CategoryLayout";
import ContainerContentCategory from "./Components/CategoryComponents/ContainerContentCategory";
import AboutMe from "./Pages/AboutMePage";
import AdminLayout from "./Layouts/AdminLayout";
import SettingLayout from "./Layouts/SettingLayout";
import ManagementUser from "./Pages/ManagementUser";
import EditProduct from "./Pages/TambahProduct";
import EditAccount from "./Pages/EditAccount";
import Product from "./Pages/DaftarProduct";
import TambahProduct from "./Pages/TambahProduct";
import FormEditProduct from "./Components/AdminComponents/FormEditProduct";
import DaftarCategory from "./Pages/DaftarCategory";
import TambahCategory from "./Pages/TambahCategory";
import EditCategory from "./Pages/EditCategory";
import TambahSubCategory from "./Components/AdminComponents/TambahSubCategory";
import AllProduct from "./Pages/AllProduct";
import RedirectToWA from "./Pages/RedirectToWA";

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
                    element: <ContainerContentCategory />,
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
        path: "/allproduct",
        element: <AllProduct />,
      },
      {
        path: "/product/:id",
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
        path: "apiproduct",
        element: <ApiProduct />,
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
        path: "wa",
        element: <RedirectToWA />,
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
        path: "password",
        element: <PasswordPage />,
      },
      {
        path: "aboutme",
        element: <AboutMe />,
      },
      {
        path: "testApi",
        element: <TestApi />,
      },
      {
        path: "apiproduct",
        element: <ApiProduct />,
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
    path: "aa",
    element: <NotFoundPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: (
          <div className="w-full h-full flex items-center justify-center ">
            <h1 className="font-cerotta text-[50px]">
              Welcome To Dashboard Admin
            </h1>
          </div>
        ),
      },
      {
        path: "/admin/manajemenakun",
        element: <ManagementUser />,
      },
      {
        path: "/admin/editakun",
        element: <EditAccount />,
      },

      {
        path: "/admin/tambahproduk",
        element: <TambahProduct />,
      },
      {
        path: "/admin/daftarproduk",
        element: <Product />,
      },
      {
        path: "/admin/editproduk/:id",
        element: <FormEditProduct />,
      },
      {
        path: "/admin/daftarcategory",
        element: <DaftarCategory />,
      },
      {
        path: "/admin/tambahcategory",
        element: <TambahCategory />,
      },
      {
        path: "/admin/editcategory/:id",
        element: <EditCategory />,
      },
      {
        path: "/admin/tambahsubcategory/:id",
        element: <TambahSubCategory />,
      },
    ],
  },
]);
