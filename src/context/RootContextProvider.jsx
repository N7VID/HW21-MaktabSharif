/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const RootContext = createContext();

export default function RootContextProvider({ children }) {
  const [modal, setModal] = useState(null);
  const [params, setParams] = useState({
    limit: 3,
    page: 1,
    sort: "",
    order: "",
  });

  return (
    <RootContext.Provider value={{ modal, setModal, params, setParams }}>
      {children}
    </RootContext.Provider>
  );
}
