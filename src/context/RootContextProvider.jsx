/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const RootContext = createContext();

export default function RootContextProvider({ children }) {
  const [modal, setModal] = useState(null);

  return (
    <RootContext.Provider value={{ modal, setModal }}>
      {children}
    </RootContext.Provider>
  );
}
