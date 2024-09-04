import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";
import LoginPage from "../pages/login-page/LoginPage";
import ProductPage from "../pages/product-page/ProductPage";
import SignUpPage from "../pages/signUp-page/SignUpPage";
import CreatePage from "../pages/create-page/CreatePage";
import ProtectedRoute from "./ProtectedRoute.routes";
import PrivateRoute from "./PrivateRoute.routes";
import { AppRoutes } from "../config/routes";

const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <HomePage />,
  },
  {
    path: AppRoutes.LOGIN,
    element: (
      <ProtectedRoute>
        <LoginPage />
      </ProtectedRoute>
    ),
  },
  {
    path: AppRoutes.SIGNUP,
    element: (
      <ProtectedRoute>
        <SignUpPage />
      </ProtectedRoute>
    ),
  },
  {
    path: AppRoutes.COURSES,
    element: (
      <PrivateRoute>
        <Outlet />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <ProductPage />,
      },
      {
        path: AppRoutes.CREATE,
        element: <CreatePage />,
      },
    ],
  },
]);

export default router;
