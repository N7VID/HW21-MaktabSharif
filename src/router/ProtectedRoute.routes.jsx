/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { AppRoutes } from "../config/routes";

export default function ProtectedRoute({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? <Navigate to={AppRoutes.COURSES} /> : children;
}
