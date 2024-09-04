import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import RootContextProvider from "./context/RootContextProvider.jsx";
import "./index.css";
import Providers from "./providers/index.jsx";
import router from "./router/index.routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootContextProvider>
      <Providers>
        <RouterProvider router={router} />
      </Providers>
    </RootContextProvider>
  </StrictMode>
);
