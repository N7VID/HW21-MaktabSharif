import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";
import LoginPage from "../pages/login-page/LoginPage";
import ProductPage from "../pages/product-page/ProductPage";
import SignUpPage from "../pages/signUp-page/SignUpPage";

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
    element: <ProductPage />,
  },
]);

export default router;
