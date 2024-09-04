import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";
import LoginPage from "../pages/login-page/LoginPage";
import ProductPage from "../pages/product-page/ProductPage";
import SignUpPage from "../pages/signUp-page/SignUpPage";
import CreatePage from "../pages/create-page/CreatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
  {
    path: "/courses",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <ProductPage />,
      },
      {
        path: "create",
        element: <CreatePage />,
      },
    ],
  },
]);

export default router;
