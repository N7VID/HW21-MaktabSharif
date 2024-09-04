import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";
import LoginPage from "../pages/login-page/LoginPage";
import ProductPage from "../pages/product-page/ProductPage";
import SignUpPage from "../pages/signUp-page/SignUpPage";
import CreatePage from "../pages/create-page/CreatePage";
import ProtectedRoute from "./ProtectedRoute.routes";
import PrivateRoute from "./PrivateRoute.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <LoginPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signUp",
    element: (
      <ProtectedRoute>
        <SignUpPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/courses",
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
        path: "create",
        element: <CreatePage />,
      },
    ],
  },
]);

export default router;
