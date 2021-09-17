import { createContext, useContext } from "react";

// create application context
const AppContext = createContext(null);

// custom context hook
export const useAppContext = () => {
  return useContext(AppContext);
};

export default function Provider({ children }) {
  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
