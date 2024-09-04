/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { AppRoutes } from "../config/routes";

export default function PrivateRoute({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? children : <Navigate to={AppRoutes.HOME} />;
}
