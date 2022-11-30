import React, { createContext, useContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

type Props = {
  children: JSX.Element;
};

type useAuthValues = {
  auth?: string;
  setAuth: [];
};

const Context = createContext([null, () => {}]);

export function useAuth() {
  return useContext(Context);
}

function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useLocalStorage<any>("token", null);
  return <Context.Provider value={[auth, setAuth]}>{children}</Context.Provider>;
}

export default AuthProvider;
