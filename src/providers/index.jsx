/* eslint-disable react/prop-types */
import { QueryClientProvider } from "@tanstack/react-query";
import { useContext } from "react";
import MuiModal from "../components/MuiModal/MuiModal.jsx";
import { RootContext } from "../context/RootContextProvider";
import client from "../lib/react-query.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }) {
  const { modal } = useContext(RootContext);
  return (
    <QueryClientProvider client={client}>
      {children}
      {modal && <MuiModal />}
      <ToastContainer />
    </QueryClientProvider>
  );
}
