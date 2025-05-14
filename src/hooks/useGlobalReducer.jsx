import { useContext, useReducer, createContext, useEffect } from "react";
import storeReducer, { initialStore } from "../store";

const StoreContext = createContext();

export function StoreProvider({ children }) {
  // ✅ Protección: intenta parsear localStorage de forma segura
  const safeInitialState = () => {
    try {
      const localData = JSON.parse(localStorage.getItem("store"));
      return localData || initialStore();
    } catch {
      return initialStore();
    }
  };

  const [store, dispatch] = useReducer(storeReducer, safeInitialState());

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(store));
  }, [store]);

  return <StoreContext.Provider value={{ store, dispatch }}>{children}</StoreContext.Provider>;
}

export default function useGlobalReducer() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useGlobalReducer debe usarse dentro de StoreProvider");
  return context;
}
